import React, { useEffect, useState } from "react";
import { rollDie } from "../utils/dice";

import {
  Wrapper,
  Label,
  Row,
  Track,
  RollButton,
  DieButton,
  DiePlaceholder,
  ValueBox,
  Total,
  Seam,
  SeamGlyph,
  Outcome,
  Info,
} from "./SegmentedDice.styles";

const DEFAULT_OUTCOME_LABELS = {
  crit: "CRIT",
  hit: "HIT",
  miss: "MISS",
  fumble: "FUMBLE",
};

const SUCCESS_OUTCOMES = new Set(["crit", "hit"]);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * SegmentedDice - connected terminal display with operators on seams
 *
 * Visual: | ROLL → 4 + 3 + 6 = 13 |
 *
 * showCombatOutcome: for a single d20 roll, shows CRIT (nat 20), FUMBLE
 * (nat 1), or HIT/MISS against `dr`. Labels can be overridden via
 * `outcomeLabels` (e.g. DODGED/HIT for a defense roll).
 *
 * fumbleOn: highest natural roll that fumbles (default 1). Captured when a
 * roll starts, so a caller that raises it after the roll (App fumble risk)
 * doesn't change the result already on screen.
 *
 * Props and rolling behavior are unchanged from the Tailwind version.
 */
export default function SegmentedDice({
  label = "",
  dice = "1d6",
  mod = 0,
  multiplier = 1,
  dropLowest = 0,
  dropHighest = 0,
  allowIndividualReroll = true,
  rollable = true,
  displayFormat = null,
  onRollComplete = null,
  character_id = "",
  showCombatOutcome = false,
  dr = 12,
  outcomeLabels = null,
  fumbleOn = 1,
}) {
  const [currentId, setCurrentId] = useState(character_id);
  const [diceStates, setDiceStates] = useState([]);
  const [dieMax, setDieMax] = useState(6);
  const [diceCount, setDiceCount] = useState(1);
  const [rolled, setRolled] = useState(false);
  const [rolling, setRolling] = useState(false);
  const [fumbleAtRoll, setFumbleAtRoll] = useState(fumbleOn);

  useEffect(() => {
    let amount = 1;
    let max = 6;

    if (typeof dice === "string" && dice.includes("d")) {
      // A trailing "a" marks an autofire weapon (d10a): the die is still a d10.
      const [count, sides] = dice.trim().replace(/a$/i, "").split("d").map(Number);
      amount = !count ? 1 : count;
      max = !sides ? 6 : sides;
    }

    setDiceCount(amount);
    setDieMax(max);
    setDiceStates(Array.from({ length: amount }, () => null));
  }, [dice]);

  useEffect(() => {
    if (character_id === currentId) return;
    setCurrentId(character_id);
    setRolled(false);
    setDiceStates(Array.from({ length: diceCount }, () => null));
  }, [character_id]);

  useEffect(() => {
    if (!rolling && rolled && onRollComplete) {
      const total = getTotal();
      if (total !== null) {
        onRollComplete(total * multiplier);
      }
    }
  }, [rolling, rolled]);

  const setDie = (index, value) => {
    setDiceStates((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  };

  // Numbers tumble for 400ms before settling. With reduced motion the
  // final value lands immediately.
  const animateDie = async (index) => {
    if (!rolled) setRolled(true);
    setRolling(true);

    if (prefersReducedMotion()) {
      setDie(index, rollDie(dieMax));
      return;
    }

    const duration = 400;
    const interval = 60;
    let elapsed = 0;

    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        elapsed += interval;
        setDie(index, rollDie(dieMax));

        if (elapsed >= duration) {
          clearInterval(intervalId);
          setDie(index, rollDie(dieMax));
          resolve();
        }
      }, interval);
    });
  };

  const rerollAll = async () => {
    setFumbleAtRoll(fumbleOn);
    setRolling(true);
    await Promise.all(diceStates.map((_, i) => animateDie(i)));
    setRolling(false);
  };

  const rerollDie = async (index) => {
    if (!allowIndividualReroll) return;
    setFumbleAtRoll(fumbleOn);
    setRolling(true);
    await animateDie(index);
    setRolling(false);
  };

  const getActiveDice = () => {
    if (!rolled || diceStates.some((d) => d === null)) return [];

    let activeDice = diceStates.map((value, index) => ({ value, index }));

    if (dropLowest > 0) {
      const sorted = [...activeDice].sort((a, b) => a.value - b.value);
      const toDrop = sorted.slice(0, dropLowest).map((d) => d.index);
      activeDice = activeDice.filter((d) => !toDrop.includes(d.index));
    }

    if (dropHighest > 0) {
      const sorted = [...activeDice].sort((a, b) => b.value - a.value);
      const toDrop = sorted.slice(0, dropHighest).map((d) => d.index);
      activeDice = activeDice.filter((d) => !toDrop.includes(d.index));
    }

    return activeDice;
  };

  const isDropped = (index) => {
    if (!rolled) return false;
    return !getActiveDice().some((d) => d.index === index);
  };

  const getTotal = () => {
    const activeDice = getActiveDice();
    if (activeDice.length === 0) return null;
    return activeDice.reduce((sum, die) => sum + die.value, 0) + mod;
  };

  const formatTotal = (value) => (displayFormat ? displayFormat(value) : value);

  // Only meaningful for a single d20; hidden while dice are still tumbling.
  const getOutcome = () => {
    if (!showCombatOutcome || !rolled || rolling) return null;
    if (diceCount !== 1 || dieMax !== 20) return null;

    const natural = diceStates[0];
    const rollTotal = getTotal();
    if (natural === null || rollTotal === null) return null;

    if (natural === 20) return "crit";
    if (natural <= fumbleAtRoll) return "fumble";
    return rollTotal * multiplier >= dr ? "hit" : "miss";
  };

  if (!rollable) return null;

  const total = getTotal();
  const outcome = getOutcome();
  const labels = { ...DEFAULT_OUTCOME_LABELS, ...(outcomeLabels || {}) };

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}

      <Row>
        <Track>
          <RollButton type="button" onClick={rerollAll} disabled={rolling}>
            {rolling ? "…" : "Roll"}
          </RollButton>

          {diceStates.map((value, idx) => (
            <React.Fragment key={idx}>
              <SeamOp>{idx === 0 ? "→" : "+"}</SeamOp>
              <DieButton
                type="button"
                onClick={() => rerollDie(idx)}
                disabled={!allowIndividualReroll || rolling}
                data-dropped={isDropped(idx) || undefined}
                aria-label={rolled && value !== null ? `Die ${idx + 1}: ${value}. Reroll` : `Die ${idx + 1}`}
              >
                {rolled && value !== null ? value : <DiePlaceholder>d{dieMax}</DiePlaceholder>}
              </DieButton>
            </React.Fragment>
          ))}

          {/* Negative modifiers read "− 2" rather than "+ -2". */}
          {mod !== 0 && (
            <>
              <SeamOp>{mod < 0 ? "−" : "+"}</SeamOp>
              <ValueBox data-rolled={rolled}>{Math.abs(mod)}</ValueBox>
            </>
          )}

          {multiplier !== 1 && (
            <>
              <SeamOp>×</SeamOp>
              <ValueBox data-rolled={rolled}>{multiplier}</ValueBox>
            </>
          )}

          <SeamOp big>=</SeamOp>
          <Total>{rolled && total !== null ? formatTotal(total * multiplier) : "—"}</Total>
        </Track>

        {outcome && (
          <Outcome data-result={SUCCESS_OUTCOMES.has(outcome) ? "success" : "fail"}>
            {labels[outcome]}
          </Outcome>
        )}
      </Row>

      {rolled && (dropLowest > 0 || dropHighest > 0) && (
        <Info>
          {dropLowest > 0 && `Dropped lowest ${dropLowest}`}
          {dropHighest > 0 && `Dropped highest ${dropHighest}`}
        </Info>
      )}
    </Wrapper>
  );
}

function SeamOp({ big = false, children }) {
  return (
    <Seam aria-hidden="true">
      <SeamGlyph data-big={big || undefined}>{children}</SeamGlyph>
    </Seam>
  );
}
