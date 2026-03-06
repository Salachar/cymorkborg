import React, { useState } from "react";

import CollapsibleSection from '../CollapsibleSection';

const rollDie = (sides) => Math.floor(Math.random() * sides) + 1;

// Parse debt die format like "3d6x1000" or "6d10x1000"
const rollDebtAmount = (dieString) => {
  const match = dieString.match(/(\d+)d(\d+)x(\d+)/);
  if (!match) return 0;

  const [, count, sides, multiplier] = match;
  let total = 0;
  for (let i = 0; i < parseInt(count); i++) {
    total += rollDie(parseInt(sides));
  }
  return total * parseInt(multiplier);
};

export default function Debt({
  character = null,
  creditorsList = [],
  urgencyList = [],
  onUpdate = () => {},
}) {
  if (!character) return null;

  const [isSelectingCreditor, setIsSelectingCreditor] = useState(false);
  const [isSelectingUrgency, setIsSelectingUrgency] = useState(false);
  const [isRollingCreditor, setIsRollingCreditor] = useState(false);
  const [isRollingUrgency, setIsRollingUrgency] = useState(false);
  const [highlightedCreditorIndex, setHighlightedCreditorIndex] = useState(null);
  const [highlightedUrgencyIndex, setHighlightedUrgencyIndex] = useState(null);

  const debt = character._debt || { amount: 0, creditor: null, urgency: null };
  const debtDie = character.constructor.die?.debt || "3d6x1000";

  const selectedCreditor = creditorsList.find(c => c.id === debt.creditor);
  const selectedUrgency = urgencyList.find(u => u.id === debt.urgency);

  const handleRollDebt = () => {
    if (isRollingCreditor || isRollingUrgency) return;

    // Roll debt amount
    const amount = rollDebtAmount(debtDie);

    if (!character._debt) {
      character._debt = {};
    }
    character._debt.amount = amount;

    // Roll creditor
    setIsRollingCreditor(true);
    const creditorDuration = 500;
    const creditorInterval = 50;
    let creditorElapsed = 0;
    let finalCreditorIndex = null;

    const creditorIntervalId = setInterval(() => {
      creditorElapsed += creditorInterval;
      finalCreditorIndex = rollDie(creditorsList.length) - 1;
      setHighlightedCreditorIndex(finalCreditorIndex);

      if (creditorElapsed >= creditorDuration) {
        clearInterval(creditorIntervalId);

        setTimeout(() => {
          setIsRollingCreditor(false);
          setHighlightedCreditorIndex(null);

          const rolledCreditor = creditorsList[finalCreditorIndex];
          character._debt.creditor = rolledCreditor.id;

          // Now roll urgency
          setIsRollingUrgency(true);
          const urgencyDuration = 500;
          const urgencyInterval = 50;
          let urgencyElapsed = 0;
          let finalUrgencyIndex = null;

          const urgencyIntervalId = setInterval(() => {
            urgencyElapsed += urgencyInterval;
            finalUrgencyIndex = rollDie(urgencyList.length) - 1;
            setHighlightedUrgencyIndex(finalUrgencyIndex);

            if (urgencyElapsed >= urgencyDuration) {
              clearInterval(urgencyIntervalId);

              setTimeout(() => {
                setIsRollingUrgency(false);
                setHighlightedUrgencyIndex(null);

                const rolledUrgency = urgencyList[finalUrgencyIndex];
                character._debt.urgency = rolledUrgency.id;

                onUpdate();
              }, 150);
            }
          }, urgencyInterval);
        }, 150);
      }
    }, creditorInterval);
  };

  const handleSelectCreditor = (creditor) => {
    if (isRollingCreditor) return;

    if (!character._debt) {
      character._debt = {};
    }
    character._debt.creditor = creditor.id;

    onUpdate();
    setIsSelectingCreditor(false);
  };

  const handleSelectUrgency = (urgency) => {
    if (isRollingUrgency) return;

    if (!character._debt) {
      character._debt = {};
    }
    character._debt.urgency = urgency.id;

    onUpdate();
    setIsSelectingUrgency(false);
  };

  const handleClearDebt = () => {
    if (character._debt) {
      character._debt = { amount: 0, creditor: null, urgency: null };
      onUpdate();
    }
  };

  const hasDebt = debt.amount > 0 || debt.creditor || debt.urgency;

  return (
    <CollapsibleSection
      title="Debt"
      sectionKey="debt"
      character={character}
      headerClass="bg-gradient-to-r from-red-900/20 via-gray-900 to-red-900/20 border-2 border-red-600/50 p-4 mb-4 cursor-pointer hover:border-red-600/70 transition-colors"
      headerTextClass="text-red-400"
      defaultOpen={false}
    >
      <div className="space-y-4">
        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleRollDebt}
              disabled={isRollingCreditor || isRollingUrgency}
              className="px-4 py-2 bg-red-900 hover:bg-red-800 border border-red-700 text-red-300 font-bold uppercase disabled:opacity-50 transition-colors"
            >
              {isRollingCreditor || isRollingUrgency ? "Rolling..." : `Roll Debt (${debtDie})`}
            </button>
            {hasDebt && (
              <button
                onClick={handleClearDebt}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-400 font-bold uppercase transition-colors"
              >
                Clear Debt
              </button>
            )}
          </div>
        </div>

        {/* Debt Amount */}
        {debt.amount > 0 && (
          <div className="bg-red-900/20 border-l-4 border-red-600 p-4">
            <div className="text-sm font-bold text-gray-400 uppercase mb-1">Amount Owed:</div>
            <div className="text-3xl font-black text-red-400 font-mono">
              {debt.amount.toLocaleString()}¤
            </div>
          </div>
        )}

        {/* Creditor Section */}
        <div className="bg-gray-900/30 border border-gray-800 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-red-400 uppercase">Who Do You Owe?</h3>
            <button
              onClick={() => setIsSelectingCreditor(!isSelectingCreditor)}
              className="text-sm px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-400 uppercase transition-colors"
            >
              {isSelectingCreditor ? "Cancel" : "Change"}
            </button>
          </div>

          {selectedCreditor ? (
            <div className="bg-red-900/10 border border-red-900/30 p-3">
              <div className="font-bold text-red-400 mb-1">{selectedCreditor.label}</div>
              <div className="text-sm text-gray-400">{selectedCreditor.description}</div>
            </div>
          ) : (
            <div className="text-gray-600 italic text-sm">No creditor selected</div>
          )}

          {/* Creditor Selection */}
          {isSelectingCreditor && (
            <div className="mt-3 space-y-1 max-h-64 overflow-y-auto bg-gray-900/50 border border-gray-800 p-3">
              {creditorsList.map((creditor, index) => {
                const isHighlighted = highlightedCreditorIndex === index;

                return (
                  <div
                    key={creditor.id}
                    onClick={() => handleSelectCreditor(creditor)}
                    className={`
                      p-3 cursor-pointer transition-all
                      ${isHighlighted
                        ? 'bg-red-400/40 border-l-2 border-red-400 text-white ring-2 ring-red-400/50'
                        : 'hover:bg-gray-800 border-l-2 border-transparent text-gray-400 hover:text-gray-300'
                      }
                    `}
                  >
                    <div className="font-bold text-sm">{creditor.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{creditor.description}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Urgency Section */}
        <div className="bg-gray-900/30 border border-gray-800 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-red-400 uppercase">How Urgent?</h3>
            <button
              onClick={() => setIsSelectingUrgency(!isSelectingUrgency)}
              className="text-sm px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-400 uppercase transition-colors"
            >
              {isSelectingUrgency ? "Cancel" : "Change"}
            </button>
          </div>

          {selectedUrgency ? (
            <div className="bg-red-900/10 border border-red-900/30 p-3">
              <div className="font-bold text-red-400 mb-1">{selectedUrgency.label}</div>
              <div className="text-sm text-gray-400">{selectedUrgency.description}</div>
            </div>
          ) : (
            <div className="text-gray-600 italic text-sm">No urgency level selected</div>
          )}

          {/* Urgency Selection */}
          {isSelectingUrgency && (
            <div className="mt-3 space-y-1 max-h-64 overflow-y-auto bg-gray-900/50 border border-gray-800 p-3">
              {urgencyList.map((urgency, index) => {
                const isHighlighted = highlightedUrgencyIndex === index;

                return (
                  <div
                    key={urgency.id}
                    onClick={() => handleSelectUrgency(urgency)}
                    className={`
                      p-3 cursor-pointer transition-all
                      ${isHighlighted
                        ? 'bg-red-400/40 border-l-2 border-red-400 text-white ring-2 ring-red-400/50'
                        : 'hover:bg-gray-800 border-l-2 border-transparent text-gray-400 hover:text-gray-300'
                      }
                    `}
                  >
                    <div className="font-bold text-sm">{urgency.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{urgency.description}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Info Note */}
        <div className="text-xs text-gray-500 bg-gray-900/30 border border-gray-800 p-3">
          You owe money. This is a narrative hook - the GM determines how and when creditors come calling.
          Debt doesn't automatically deduct from your credits but may require payment or favors.
        </div>
      </div>
    </CollapsibleSection>
  );
}
