import { useState, useEffect } from 'react';
import './mastermindHack.css';

// Colorful symbols for sequences (geometric/poker style)
const SEQUENCE_SYMBOLS = ['◆', '●', '▲', '■', '◥', '⬟'];
const SEQUENCE_COLORS = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899']; // red, blue, green, amber, purple, pink

// Garbage characters (flat, dim green)
// const GARBAGE_SYMBOLS = '▓░▒█▲■★◆●✦';
const GARBAGE_SYMBOLS = '⍂ﾐ∑⌬┼₿ ꙰ ﾊ▓∆⌠⌗⍉░⊗ﾂ§⎔▌∞ﾅ∇⌧₿╬⍋ﾓ⊕▒⎕꙳⌁∂┤¤ﾘ▓≈⌭¢£¥₩€₿§¶©®™¤№';

const DIFFICULTY_PRESETS = {
  easy: {
    sequenceLength: 4,
    sequenceCount: 8,
    attempts: 6,
    symbolCount: 3,
    colorCount: 3,
  },
  medium: {
    sequenceLength: 5,
    sequenceCount: 10,
    attempts: 4,
    symbolCount: 4,
    colorCount: 4,
  },
  hard: {
    sequenceLength: 5,
    sequenceCount: 12,
    attempts: 4,
    symbolCount: 5,
    colorCount: 5,
  },
  expert: {
    sequenceLength: 6,
    sequenceCount: 15,
    attempts: 3,
    symbolCount: 6,
    colorCount: 6,
  },
  corporate: {
    sequenceLength: 7,
    sequenceCount: 20,
    attempts: 2,
    symbolCount: 6,
    colorCount: 6,
  },
};

/**
 * MastermindHack Component - Fallout-style sequence hacking minigame
 *
 * Single-flow terminal with colorful sequences embedded in garbage.
 * Guess panel on right shows history with feedback for deduction.
 *
 * Props:
 * - sequenceLength: Length of the target sequence (default: 5)
 * - sequenceCount: Number of sequences to find (default: 10)
 * - attempts: Number of allowed guesses (default: 4)
 * - symbolCount: How many different symbols to use (default: 4, max: 6)
 * - colorCount: How many different colors to use (default: 4, max: 6)
 * - onSuccess: Callback when hack succeeds
 * - onFailure: Callback when attempts run out (optional)
 */
export default function MastermindHack({
  command,
  commandDef,
  difficulty,
  sequenceLength,
  sequenceCount,
  attempts,
  symbolCount,
  colorCount,
  onSuccess = () => {},
  onFailure = () => {},
}) {
  // Apply preset if difficulty is provided, otherwise use individual props or defaults
  const preset = difficulty ? DIFFICULTY_PRESETS[difficulty] : {};
  const config = {
    sequenceLength: sequenceLength ?? preset.sequenceLength ?? 5,
    sequenceCount: sequenceCount ?? preset.sequenceCount ?? 10,
    attempts: attempts ?? preset.attempts ?? 4,
    symbolCount: symbolCount ?? preset.symbolCount ?? 4,
    colorCount: colorCount ?? preset.colorCount ?? 4,
  };

  const [answer, setAnswer] = useState([]);
  const [symbolAnswer, setSymbolAnswer] = useState('');
  const [sequences, setSequences] = useState([]);
  const [terminalChars, setTerminalChars] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [attemptsLeft, setAttemptsLeft] = useState(config.attempts);
  const [isComplete, setIsComplete] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const [showRetry, setShowRetry] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  const handleRetry = () => {
    // The game was won
    if (showSuccess) return;
    setShowRetry(false);
    initializeGame();
  };

  const initializeGame = () => {
    // Generate answer sequence
    const newAnswer = generateSequence(config.sequenceLength, config.symbolCount, config.colorCount);
    setAnswer(newAnswer);
    let stringAnswer = '';
    newAnswer.forEach((c) => {
      stringAnswer += c.symbol;
    });
    setSymbolAnswer(stringAnswer);

    // Generate unique sequences (excluding answer initially)
    const newSequences = [];
    const seenSequences = new Set();

    while (newSequences.length < config.sequenceCount - 1) {
      const seq = generateSequence(config.sequenceLength, config.symbolCount, config.colorCount);
      const key = JSON.stringify(seq);

      if (!seenSequences.has(key)) {
        seenSequences.add(key);
        newSequences.push({
          id: newSequences.length,
          sequence: seq,
        });
      }
    }

    // Insert answer at random position
    const answerIndex = Math.floor(Math.random() * config.sequenceCount);
    newSequences.splice(answerIndex, 0, {
      id: newSequences.length,
      sequence: newAnswer,
    });

    setSequences(newSequences);

    // Build flat character array
    const chars = [];
    newSequences.forEach((seq) => {
      // Add garbage before sequence
      const garbageCount = Math.floor(Math.random() * 4) + 3; // 3-6 chars
      for (let i = 0; i < garbageCount; i++) {
        chars.push({
          type: 'garbage',
          char: GARBAGE_SYMBOLS[Math.floor(Math.random() * GARBAGE_SYMBOLS.length)],
        });
      }

      // Add sequence characters
      seq.sequence.forEach((item) => {
        chars.push({
          type: 'sequence',
          sequenceId: seq.id,
          char: item.symbol,
          color: item.color,
        });
      });
    });

    // Add trailing garbage
    for (let i = 0; i < 20; i++) {
      chars.push({
        type: 'garbage',
        char: GARBAGE_SYMBOLS[Math.floor(Math.random() * GARBAGE_SYMBOLS.length)],
      });
    }

    setTerminalChars(chars);
    setAttemptsLeft(config.attempts);
    setGuesses([]);
    setIsComplete(false);
  };

  const generateSequence = (length, symCount, colCount) => {
    const sequence = [];
    const useSymbols = SEQUENCE_SYMBOLS.slice(0, symCount);
    const useColors = SEQUENCE_COLORS.slice(0, colCount);

    for (let i = 0; i < length; i++) {
      sequence.push({
        symbol: useSymbols[Math.floor(Math.random() * useSymbols.length)],
        color: useColors[Math.floor(Math.random() * useColors.length)],
      });
    }
    return sequence;
  };

  const handleGuess = (sequenceId) => {
    if (isComplete || attemptsLeft <= 0) return;

    // Find the sequence
    const guessedSeq = sequences.find(s => s.id === sequenceId);
    if (!guessedSeq) return;

    // Calculate feedback
    const feedback = calculateFeedback(guessedSeq.sequence, answer);

    // Add to guesses history
    const newGuess = {
      sequenceId,
      sequence: guessedSeq.sequence,
      feedback,
      isCorrect: feedback.every(r => r === 'exact'),
    };
    setGuesses(prev => [...prev, newGuess]);

    // Check if won
    if (newGuess.isCorrect) {
      setIsComplete(true);
      setTimeout(() => {
        setShowSuccess(true);
        // setShowRetry(true);
        if (onSuccess) onSuccess(command, commandDef, symbolAnswer);
      }, 800);
      return;
    }

    // Decrease attempts
    const newAttempts = attemptsLeft - 1;
    setAttemptsLeft(newAttempts);

    if (newAttempts <= 0) {
      setIsComplete(true);
      setTimeout(() => {
        setShowRetry(true);
        if (onFailure) onFailure();
      }, 800);
    }
  };

  const calculateFeedback = (guess, target) => {
    const result = [];

    for (let i = 0; i < guess.length; i++) {
      if (guess[i].symbol === target[i].symbol && guess[i].color === target[i].color) {
        result.push('exact'); // Green - perfect match
      } else if (guess[i].symbol === target[i].symbol || guess[i].color === target[i].color) {
        result.push('partial'); // Yellow - symbol OR color matches
      } else {
        result.push('none'); // Gray - no match
      }
    }

    return result;
  };

  const getFeedbackColor = (type) => {
    switch (type) {
      case 'exact': return 'rgba(0, 255, 65, 0.5)'; // Green
      case 'partial': return 'rgba(251, 191, 36, 0.5)'; // Yellow
      default: return 'rgba(77, 77, 77, 0.5)'; // Gray
    }
  };

  const isSequenceGuessed = (sequenceId) => {
    return guesses.some(g => g.sequenceId === sequenceId);
  };

  return (
    <div className={`mastermind-hack ${showSuccess ? 'ice-cracked' : ''}`}>
      {/* Header */}
      <div className="mastermind-header">
        <div className="mastermind-title">
          <span className="mastermind-icon">⚠</span>
          ICE DETECTED - SEQUENCE BREAKER REQUIRED
        </div>

        {isComplete && (
          <div className={`mastermind-status ${guesses[guesses.length - 1]?.isCorrect ? 'success' : 'failure'}`}>
            {guesses[guesses.length - 1]?.isCorrect ? '✓ ICE BROKEN - ACCESS GRANTED' : '✗ ICE INTACT - ACCESS DENIED'}
          </div>
        )}
      </div>

      {/* Help */}
      <div style={{ marginBottom: '0.5rem', fontFamily: 'monospace' }}>
        <button
          onClick={() => setShowHelp(v => !v)}
          style={{
            width: '100%',
            textAlign: 'left',
            background: 'transparent',
            border: '1px solid rgba(79, 209, 197, 0.2)',
            color: 'rgba(79, 209, 197, 0.5)',
            padding: '0.35rem 0.75rem',
            fontSize: '0.72rem',
            cursor: 'pointer',
            letterSpacing: '0.05em',
            fontFamily: 'monospace',
          }}
        >
          {showHelp ? '▲ HIDE INSTRUCTIONS' : '▼ HOW TO PLAY'}
        </button>

        {showHelp && (
          <div style={{
            padding: '0.75rem',
            border: '1px solid rgba(79, 209, 197, 0.2)',
            borderTop: 'none',
            backgroundColor: 'rgba(19, 23, 34, 0.8)',
            color: 'rgb(148, 163, 184)',
            fontSize: '0.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
          }}>
            <div style={{ color: 'rgb(79, 209, 197)', fontWeight: 'bold', marginBottom: '0.25rem' }}>SEQUENCE BREAKER — INSTRUCTIONS</div>
            <div>→ A <span style={{ color: 'rgb(251, 191, 36)' }}>target sequence</span> is hidden among the garbage in the terminal. Find and select it.</div>
            <div>→ Sequences are groups of colored symbols. Tap any symbol in a sequence to guess it.</div>
            <div>→ After each guess you get feedback on every position:</div>
            <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <div><span style={{ color: 'rgb(0, 255, 65)' }}>■ Exact</span> — correct symbol AND correct color in this position</div>
              <div><span style={{ color: 'rgb(251, 191, 36)' }}>■ Partial</span> — correct symbol OR correct color, but not both</div>
              <div><span style={{ color: 'rgb(77, 77, 77)' }}>■ None</span> — neither symbol nor color matches</div>
            </div>
            <div>→ Use the feedback to narrow down which sequence is correct. You have a limited number of attempts.</div>
            <div style={{ color: 'rgba(252, 129, 129, 0.8)', marginTop: '0.25rem' }}>Run out of attempts and the ICE holds. You can retry if that happens, and the sequence changes.</div>
          </div>
        )}
      </div>

      {/* Main layout: Terminal + Guess Panel */}
      <div className="mastermind-main">
        <div
          className="mastermind-instructions"
          style={{ gridArea: 'mmh-text-one' }}
        >
          Select sequence to break ICE.
        </div>

        <div
          className="mastermind-terminal"
          style={{ gridArea: 'mmh-terminal' }}
        >
          {terminalChars.map((cell, idx) => {
            if (cell.type === 'garbage') {
              return (
                <div key={`cell-${idx}`} className="terminal-cell garbage-cell">
                  {cell.char}
                </div>
              );
            } else {
              // Sequence cell
              const isGuessed = isSequenceGuessed(cell.sequenceId);
              return (
                <div
                  key={`cell-${idx}`}
                  className={`terminal-cell sequence-cell ${isGuessed ? 'guessed' : ''}`}
                  style={{ color: cell.color }}
                  onClick={() => !isComplete && handleGuess(cell.sequenceId)}
                >
                  {cell.char}
                </div>
              );
            }
          })}
        </div>

        <div
          className="mastermind-instructions"
          style={{ gridArea: 'mmh-text-two' }}
        >
          Feedback:
          <span style={{ color: 'rgb(0, 255, 65)', marginLeft: '0.5rem' }}>■ Exact</span>
          <span style={{ color: 'rgb(251, 191, 36)', marginLeft: '0.5rem' }}>■ Partial</span>
          <span style={{ color: 'rgb(77, 77, 77)', marginLeft: '0.5rem' }}>■ None</span>
        </div>

        <div
          className="guess-panel"
          style={{ gridArea: 'mmh-guesses' }}
        >
          <div className="guess-panel-header">
            GUESSES
            <div className="mastermind-attempts">ATTEMPTS: {attemptsLeft}/{config.attempts}</div>
          </div>
          <div className="guess-list">
            {guesses.map((guess, idx) => (
              <div key={idx} className="guess-entry">
                {/* Sequence as cards with feedback backgrounds */}
                <div className="guess-sequence">
                  {guess.sequence.map((item, i) => (
                    <div
                      key={i}
                      className="guess-card"
                      style={{ backgroundColor: getFeedbackColor(guess.feedback[i]) }}
                    >
                      <span style={{ color: item.color }}>
                        {item.symbol}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/* Empty slots */}
            {Array.from({ length: config.attempts - guesses.length }).map((_, idx) => (
              <div key={`empty-${idx}`} className="guess-entry empty">
                <div className="guess-sequence">—</div>
              </div>
            ))}
          </div>
        </div>

        {/* Retry Overlay */}
        {showRetry && (
          <div className="mastermind-retry-overlay" onClick={handleRetry}>
            <div className="retry-content">
              <div className={`retry-icon ${guesses[guesses.length - 1]?.isCorrect ? 'success' : 'failure'}`}>
                {guesses[guesses.length - 1]?.isCorrect ? '✓' : '✗'}
              </div>
              <div className="retry-message">
                {guesses[guesses.length - 1]?.isCorrect ? 'ACCESS GRANTED' : 'ACCESS DENIED'}
              </div>
              {!showSuccess && (
                <div className="retry-button">
                  TAP TO RETRY
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
