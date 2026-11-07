import { useState } from 'react';

import SegmentedDice from '@components/SegmentedDice';
import SheetSection from '@components/SheetSection/SheetSection';
import TablePicker, { entryId } from '@components/TablePicker/TablePicker';
import Modal from '@components/Modal/Modal';
import { Button } from '@components/Layout/Layout';
import { DEBT_TO_WHOM, DEBT_URGENCY } from '@data/tables';

import AmountInput from './AmountInput';
import PickerButton from './PickerButton';
import { Field, FieldLabel, Note, Divider } from './Editor.styles';
import {
  CreditsBar,
  CreditsReadout,
  PanelLabel,
  CreditsAmount,
  DebtBlock,
  DebtAmount,
  DebtDetails,
  DebtTerm,
  DebtValue,
  DebtDescription,
  Preview,
  PreviewTerm,
  PreviewValue,
  DialogActions,
  GroupTitle,
  Row,
  QuickAdjust,
  Pickers,
} from './CredsDebt.styles';

const QUICK_ADJUST = [-100, -50, -10, -1, 1, 10, 50, 100];

const formatCreds = (n) => `${(n || 0).toLocaleString()}¤`;

const findEntry = (list, id) => (id ? list.find((e) => entryId(e) === id) : null);

// "3d6x1000" -> { dice: "3d6", multiplier: 1000 }
function parseDebtDie(die = '3d6x1000') {
  const match = die.match(/^(\d+d\d+)x(\d+)$/);
  return match ? { dice: match[1], multiplier: Number(match[2]) } : { dice: '3d6', multiplier: 1000 };
}

/**
 * Credits and debt, as one single-column SheetSection.
 *   play   a thin credits banner with Pay down debt (when there's debt),
 *          then the debt at full width: amount, who you owe, how urgent
 *   pay    its own dialog: amount, Max, before → after preview
 *   edit   credits: balance, quick adjust, starting roll
 *          debt: amount (adjust freely), roll, creditor + urgency pickers, clear
 */
export default function CredsDebt({ character = null, onUpdate = () => {} }) {
  const [paying, setPaying] = useState(false);

  if (!character) return null;

  const debt = character.debt;
  const creditor = findEntry(DEBT_TO_WHOM, debt.creditor);
  const urgency = findEntry(DEBT_URGENCY, debt.urgency);

  return (
    <SheetSection
      id="sheet-creds"
      title="Creds & Debt"
      editWidth="40rem"
      edit={<CredsDebtEditor character={character} onUpdate={onUpdate} />}
    >
      <CreditsBar>
        <CreditsReadout>
          <PanelLabel>Credits</PanelLabel>
          <CreditsAmount>{formatCreds(character.credits)}</CreditsAmount>
        </CreditsReadout>

        {debt.amount > 0 && (
          <Button
            type="button"
            data-variant="primary"
            disabled={character.credits <= 0}
            title={character.credits <= 0 ? 'No credits to pay with' : 'Pay down debt from your credits'}
            onClick={() => setPaying(true)}
          >
            Pay down debt
          </Button>
        )}
      </CreditsBar>

      <DebtBlock>
        <PanelLabel>Debt</PanelLabel>
        {debt.amount > 0 ? (
          <DebtAmount>{formatCreds(debt.amount)}</DebtAmount>
        ) : (
          <DebtAmount data-empty="true">No debt</DebtAmount>
        )}

        {(creditor || urgency) && (
          <DebtDetails>
            {creditor && (
              <div>
                <DebtTerm>Owed to</DebtTerm>
                <DebtValue>
                  {creditor.label}
                  {creditor.description && <DebtDescription>{creditor.description}</DebtDescription>}
                </DebtValue>
              </div>
            )}
            {urgency && (
              <div>
                <DebtTerm>Urgency</DebtTerm>
                <DebtValue>
                  {urgency.label}
                  {urgency.description && <DebtDescription>{urgency.description}</DebtDescription>}
                </DebtValue>
              </div>
            )}
          </DebtDetails>
        )}
      </DebtBlock>

      {paying && (
        <PayDebtDialog
          character={character}
          onUpdate={onUpdate}
          onClose={() => setPaying(false)}
        />
      )}
    </SheetSection>
  );
}

function CredsDebtEditor({ character, onUpdate }) {
  const [picker, setPicker] = useState(null); // 'creditor' | 'urgency' | null

  const debt = character.debt;
  const { dice, multiplier } = parseDebtDie(character.constructor.die?.debt);
  const creditor = findEntry(DEBT_TO_WHOM, debt.creditor);
  const urgency = findEntry(DEBT_URGENCY, debt.urgency);

  const update = (fn) => {
    fn();
    onUpdate();
  };

  const pickerConfig = {
    creditor: {
      title: 'Who you owe',
      entries: DEBT_TO_WHOM,
      selectedId: debt.creditor,
      onSelect: (entry) => update(() => character.setDebtCreditor(entry)),
      onClear: () => update(() => character.setDebtCreditor(null)),
    },
    urgency: {
      title: 'How urgent',
      entries: DEBT_URGENCY,
      selectedId: debt.urgency,
      onSelect: (entry) => update(() => character.setDebtUrgency(entry)),
      onClear: () => update(() => character.setDebtUrgency(null)),
    },
  }[picker];

  return (
    <>
      {/* ---- Credits ---- */}
      <GroupTitle>Credits</GroupTitle>

      <Field>
        <FieldLabel>Balance</FieldLabel>
        <AmountInput
          label="Credit balance"
          value={character.credits}
          onChange={(n) => update(() => (character.credits = n))}
        />
      </Field>

      <QuickAdjust>
        {QUICK_ADJUST.map((amount) => (
          <Button
            key={amount}
            type="button"
            onClick={() => update(() => (character.credits = character.credits + amount))}
            aria-label={`${amount > 0 ? 'Add' : 'Remove'} ${Math.abs(amount)} credits`}
          >
            {amount > 0 ? `+${amount}` : `−${Math.abs(amount)}`}
          </Button>
        ))}
      </QuickAdjust>

      <div>
        <FieldLabel>Starting credits: roll 2d6 × 10</FieldLabel>
        <div style={{ marginTop: '0.4rem' }}>
          <SegmentedDice
            character_id={character.id}
            dice="2d6"
            multiplier={10}
            displayFormat={(v) => `${v}¤`}
            onRollComplete={(total) => update(() => (character.credits = total))}
          />
        </div>
      </div>

      <Divider />

      {/* ---- Debt ---- */}
      <GroupTitle>Debt</GroupTitle>

      <Field>
        <FieldLabel>Amount owed</FieldLabel>
        <AmountInput
          label="Debt amount"
          value={debt.amount}
          onChange={(n) => update(() => character.setDebtAmount(n))}
        />
      </Field>
      <Note>Adjust freely: new loans, interest, mission payouts.</Note>

      <div>
        <FieldLabel>Roll debt: {dice} × {multiplier.toLocaleString()}</FieldLabel>
        <div style={{ marginTop: '0.4rem' }}>
          <SegmentedDice
            character_id={character.id}
            dice={dice}
            multiplier={multiplier}
            displayFormat={(v) => `${v.toLocaleString()}¤`}
            onRollComplete={(total) => update(() => character.setDebtAmount(total))}
          />
        </div>
      </div>

      <Pickers>
        <PickerButton wide label="Who you owe" value={creditor?.label} onClick={() => setPicker('creditor')} />
        <PickerButton wide label="How urgent" value={urgency?.label} onClick={() => setPicker('urgency')} />
      </Pickers>

      <Row>
        <Button type="button" disabled={debt.amount <= 0} onClick={() => update(() => character.clearDebt())}>
          Clear debt
        </Button>
        <Note>Sets the amount to 0. Keeps who you owe.</Note>
      </Row>

      {pickerConfig && (
        <TablePicker
          open
          title={pickerConfig.title}
          entries={pickerConfig.entries}
          selectedId={pickerConfig.selectedId}
          onSelect={pickerConfig.onSelect}
          onClear={pickerConfig.onClear}
          onClose={() => setPicker(null)}
        />
      )}
    </>
  );
}

/* ---- Pay down debt ------------------------------------------------------- */

// Moves credits onto the debt. Pay applies it and closes.
function PayDebtDialog({ character, onUpdate, onClose }) {
  const [payment, setPayment] = useState(0);

  const credits = character.credits;
  const owed = character.debt.amount;
  const maxPayment = Math.max(0, Math.min(credits, owed));
  const pay = Math.max(0, Math.min(payment, maxPayment));

  return (
    <Modal open onClose={onClose} title="Pay down debt" maxWidth="26rem">
      <Field>
        <FieldLabel>Amount</FieldLabel>
        <Row>
          <AmountInput label="Payment amount" value={payment} onChange={(n) => setPayment(Math.max(0, n))} />
          <Button type="button" disabled={maxPayment <= 0} onClick={() => setPayment(maxPayment)}>
            Max
          </Button>
        </Row>
      </Field>
      <Note>Capped at what you have and what you owe ({formatCreds(maxPayment)}).</Note>

      <Preview>
        <PreviewTerm>Credits</PreviewTerm>
        <PreviewValue>
          {formatCreds(credits)} → <strong>{formatCreds(credits - pay)}</strong>
        </PreviewValue>
        <PreviewTerm>Debt</PreviewTerm>
        <PreviewValue>
          {formatCreds(owed)} → <strong>{formatCreds(owed - pay)}</strong>
        </PreviewValue>
      </Preview>

      <DialogActions>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button
          type="button"
          data-variant="primary"
          disabled={pay <= 0}
          onClick={() => {
            character.payDebtFromCredits(pay);
            onUpdate();
            onClose();
          }}
        >
          Pay {formatCreds(pay)}
        </Button>
      </DialogActions>
    </Modal>
  );
}
