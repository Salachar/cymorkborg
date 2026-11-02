import { useState } from 'react';

import SegmentedDice from '@components/SegmentedDice';
import SheetSection from '@components/SheetSection/SheetSection';
import TablePicker, { entryId } from '@components/TablePicker/TablePicker';
import { Button } from '@components/Layout/Layout';
import { DEBT_TO_WHOM, DEBT_URGENCY } from '@data/tables';

import AmountInput from './AmountInput';
import PickerButton from './PickerButton';
import { Field, FieldLabel, Note, Divider } from './Editor.styles';
import {
  Summary,
  Panel,
  PanelLabel,
  Amount,
  DebtDetails,
  DebtTerm,
  DebtValue,
  DebtDescription,
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
 * Credits and debt, as one SheetSection.
 *   play   balance, amount owed, who you owe, how urgent
 *   edit   credits: balance, quick adjust, starting roll
 *          debt: amount (adjust freely), roll, creditor + urgency pickers,
 *                pay from credits, clear
 */
export default function CredsDebt({ character = null, onUpdate = () => {} }) {
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
      <Summary>
        <Panel>
          <PanelLabel>Credits</PanelLabel>
          <Amount data-tone="credits">{formatCreds(character.credits)}</Amount>
        </Panel>

        <Panel>
          <PanelLabel>Debt</PanelLabel>
          {debt.amount > 0 ? (
            <Amount>{formatCreds(debt.amount)}</Amount>
          ) : (
            <Amount data-empty="true">No debt</Amount>
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
        </Panel>
      </Summary>
    </SheetSection>
  );
}

function CredsDebtEditor({ character, onUpdate }) {
  const [picker, setPicker] = useState(null); // 'creditor' | 'urgency' | null
  const [payment, setPayment] = useState(0);

  const debt = character.debt;
  const { dice, multiplier } = parseDebtDie(character.constructor.die?.debt);
  const maxPayment = Math.max(0, Math.min(character.credits, debt.amount));
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

      <div>
        <FieldLabel>Pay from credits</FieldLabel>
        <Row style={{ marginTop: '0.4rem' }}>
          <AmountInput label="Payment amount" value={payment} onChange={(n) => setPayment(Math.max(0, n))} />
          <Button
            type="button"
            data-variant="primary"
            disabled={payment <= 0 || maxPayment <= 0}
            onClick={() => {
              update(() => character.payDebtFromCredits(payment));
              setPayment(0);
            }}
          >
            Pay {formatCreds(Math.min(payment, maxPayment))}
          </Button>
          <Button type="button" disabled={maxPayment <= 0} onClick={() => setPayment(maxPayment)}>
            Max
          </Button>
        </Row>
        <Note style={{ marginTop: '0.4rem' }}>
          Moves credits onto the debt. Capped at what you have and what you owe ({formatCreds(maxPayment)}).
        </Note>
      </div>

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
