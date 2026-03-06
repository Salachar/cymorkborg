import React, { useState, useEffect } from 'react';
import { PASSWORD_ATTEMPTS_STORAGE_KEY } from '@utils/terminal';

const IS_LOCALHOST = window.location.hostname === 'localhost';

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getUniqueKeysWithFrequency = (password) => {
  const freq = {};
  for (const char of password.toUpperCase()) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
};

const loadAttempts = () => {
  try {
    const saved = localStorage.getItem(PASSWORD_ATTEMPTS_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    return {};
  }
};

const saveAttempt = (command, attempt) => {
  try {
    const all = loadAttempts();
    const existing = all[command] || [];
    const updated = { ...all, [command]: [...existing, attempt] };
    localStorage.setItem(PASSWORD_ATTEMPTS_STORAGE_KEY, JSON.stringify(updated));
    return updated[command];
  } catch (e) {
    return [];
  }
};

export default function PasswordPrompt({
  command,
  commandDef,
  password,
  hint = "",
  showCount = false,      // shows character count
  showFirst = false,      // shows first letter
  showFrequency = false,  // shows frequency numbers on keys
  decoyLetters = "",      // adds extra fake keys
  onSubmit,
  children,
}) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [shuffledKeys, setShuffledKeys] = useState([]);
  const [keyFrequency, setKeyFrequency] = useState({});
  const [hasDecoys, setHasDecoys] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [clickedKey, setClickedKey] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [attempts, setAttempts] = useState(() => {
    const all = loadAttempts();
    return all[command] || [];
  });

  // Does the password contain spaces?
  const passwordHasSpaces = password.includes(' ');

  useEffect(() => {
    const freq = getUniqueKeysWithFrequency(password);
    setKeyFrequency(freq);

    let keysToShuffle = Object.keys(freq);

    // Remove space from the shuffled keys — handled separately as a dedicated button
    const spaceIndex = keysToShuffle.indexOf(' ');
    if (spaceIndex !== -1) keysToShuffle.splice(spaceIndex, 1);

    if (decoyLetters) {
      const decoyArray = decoyLetters.split(',').map(l => l.trim().toUpperCase()).filter(Boolean);
      keysToShuffle = [...keysToShuffle, ...decoyArray];
      setHasDecoys(decoyArray.length > 0);
    } else {
      setHasDecoys(false);
    }

    setShuffledKeys(shuffleArray(keysToShuffle));
  }, [password, decoyLetters]);

  const handleKeyClick = (key) => {
    setCurrentPassword(prev => prev + key);
    setFeedback("");
    setClickedKey(key);
    setTimeout(() => setClickedKey(null), 150);
  };

  const handleSpace = () => {
    setCurrentPassword(prev => prev + ' ');
    setFeedback("");
    setClickedKey('SPACE');
    setTimeout(() => setClickedKey(null), 150);
  };

  const handleBackspace = () => {
    setCurrentPassword(prev => prev.slice(0, -1));
    setFeedback("");
  };

  const handleClear = () => {
    setCurrentPassword("");
    setFeedback("");
  };

  const handleSubmit = () => {
    if (currentPassword.toUpperCase() === password.toUpperCase()) {
      setShowSuccess(true);
      onSubmit(command, commandDef, password);
    } else {
      const updated = saveAttempt(command, currentPassword);
      setAttempts(updated);
      setFeedback("INCORRECT PASSWORD");
    }
  };

  const handleOverride = () => {
    setShowSuccess(true);
    onSubmit(command, commandDef, password);
  };

  const getCharacterCountDisplay = () => {
    const current = currentPassword.length;
    const target = password.length;
    if (current === target) return `${current}/${target}`;
    if (current > target) return `${current}/${target} (+${current - target})`;
    return `${current}/${target}`;
  };

  const showFirstLetter = showFirst;
  const showFrequencyNumbers = showFrequency;
  const showCharacterCount = showCount || showFrequency;

  return (
    <div
      className="my-4 border-2 rounded-lg p-4 font-mono"
      style={{
        borderColor: 'rgb(77, 167, 188)',
        backgroundColor: 'rgba(29, 35, 50, 0.9)',
      }}
    >
      {/* Header */}
      <div className="mb-4 pb-2 border-b" style={{ borderColor: 'rgb(77, 167, 188)' }}>
        <div className="font-bold text-lg" style={{ color: showSuccess ? 'rgb(59, 235, 82)' : 'rgb(133, 175, 231)' }}>
          {showSuccess ? 'PASSWORD ACCEPTED' : 'PASSWORD ENTRY'}
        </div>
        <div className="text-sm" style={{ color: 'rgb(148, 163, 184)' }}>
          {command}
        </div>
      </div>

      {!showSuccess && (
        <>
          {/* Current Password Display */}
          <div className="mb-4">
            <div className="text-2xl font-bold tracking-wider mb-1" style={{ color: 'rgb(79, 209, 197)', minHeight: '2rem' }}>
              {currentPassword.replace(/ /g, '·') || ''}
              <span style={{ animation: 'pw-cursor 1s step-end infinite' }}>▌</span>
            </div>
            {showCharacterCount && (
              <div className="text-sm" style={{ color: 'rgb(148, 163, 184)' }}>
                {getCharacterCountDisplay()} characters
              </div>
            )}
          </div>

          {/* Rules / notes */}
          <div className="mb-3 text-xs" style={{ color: 'rgba(148, 163, 184, 0.6)', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
            <div>Keys shown are the only characters in the password. Order them correctly.</div>
            {passwordHasSpaces && (
              <div style={{ color: 'rgb(251, 191, 36)' }}>↳ This password contains spaces — use the SPACE button.</div>
            )}
            {hasDecoys && (
              <div style={{ color: 'rgb(252, 129, 129)' }}>
                {`↳ ${decoyLetters.split(',').length} extra keys have been added. Not all keys are used.`}
              </div>
            )}
          </div>

          {/* Virtual Keyboard */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {shuffledKeys.map((key, idx) => (
                <button
                  key={`${key}-${idx}`}
                  onClick={() => handleKeyClick(key)}
                  className="relative px-4 py-2 font-bold text-lg rounded transition-all duration-150"
                  style={{
                    backgroundColor: clickedKey === key ? 'rgb(56, 178, 172)' : 'rgb(45, 53, 72)',
                    color: 'rgb(133, 175, 231)',
                    border: '2px solid rgb(77, 167, 188)',
                    minWidth: '48px',
                  }}
                >
                  {key}
                  {showFrequencyNumbers && keyFrequency[key] > 0 && (
                    <span className="absolute top-0 right-1 text-xs" style={{ color: 'rgb(251, 191, 36)' }}>
                      {keyFrequency[key]}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {Boolean(children) && (
            <div className="mb-4">{children}</div>
          )}

          {/* Hints */}
          {(hint || showFirstLetter) && (
            <div className="mb-4 p-3 rounded" style={{ backgroundColor: 'rgba(45, 53, 72, 0.5)' }}>
              {hint && (
                <div className="text-sm mb-1" style={{ color: 'rgb(251, 191, 36)' }}>
                  <span className="font-bold">Hint:</span> {hint}
                </div>
              )}
              {showFirstLetter && (
                <div className="text-sm" style={{ color: 'rgb(251, 191, 36)' }}>
                  <span className="font-bold">First Letter:</span> {password.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          )}

          {/* Previous Attempts */}
          {attempts.length > 0 && (
            <div
              className="mb-4 p-3 rounded"
              style={{ backgroundColor: 'rgba(252, 129, 129, 0.05)', border: '1px solid rgba(252, 129, 129, 0.2)' }}
            >
              <div className="text-xs font-bold mb-2" style={{ color: 'rgba(252, 129, 129, 0.7)', letterSpacing: '0.08em' }}>
                FAILED ATTEMPTS ({attempts.length})
              </div>
              <div style={{ maxHeight: '80px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                {attempts.map((a, i) => (
                  <div key={i} className="text-sm font-bold tracking-wider" style={{ color: 'rgb(252, 129, 129)' }}>
                    {a || '(empty)'}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Feedback */}
          {feedback && (
            <div className="mb-4 p-2 rounded text-center font-bold" style={{
              backgroundColor: 'rgba(252, 129, 129, 0.2)',
              color: 'rgb(252, 129, 129)',
            }}>
              {feedback}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleBackspace}
              className="px-4 py-2 font-bold rounded"
              style={{ backgroundColor: 'rgb(45, 53, 72)', color: 'rgb(133, 175, 231)', border: '2px solid rgb(77, 167, 188)' }}
            >
              ← Back
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-2 font-bold rounded"
              style={{ backgroundColor: 'rgb(45, 53, 72)', color: 'rgb(133, 175, 231)', border: '2px solid rgb(77, 167, 188)' }}
            >
              Clear
            </button>

            {/* Space + Submit — split 50/50 */}
            <div style={{ flex: 1, display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={handleSpace}
                className="font-bold rounded transition-all duration-150"
                style={{
                  flex: 1,
                  backgroundColor: clickedKey === 'SPACE' ? 'rgb(56, 178, 172)' : 'rgb(45, 53, 72)',
                  color: 'rgb(133, 175, 231)',
                  border: '2px solid rgb(77, 167, 188)',
                  letterSpacing: '0.1em',
                  fontSize: '0.75rem',
                }}
              >
                SPACE
              </button>
              <button
                onClick={handleSubmit}
                className="font-bold rounded"
                style={{
                  flex: 1,
                  backgroundColor: 'rgb(79, 209, 197)',
                  color: 'rgb(19, 23, 34)',
                  border: '2px solid rgb(79, 209, 197)',
                }}
              >
                Submit
              </button>
            </div>

            {/* Override — localhost only */}
            {IS_LOCALHOST && (
              <button
                onClick={handleOverride}
                className="px-4 py-2 font-bold rounded"
                style={{ backgroundColor: 'rgba(252, 129, 129, 0.2)', color: 'rgb(252, 129, 129)', border: '2px solid rgb(252, 129, 129)' }}
              >
                Override
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
