import React from 'react';

import './confirmationModal.css';

export default function ConfirmationModal({
  open,
  title,
  message,
  confirmLabel = 'Yes',
  cancelLabel = 'No',
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <div className="cm-overlay" onClick={onCancel}>
      <div className="cm-modal" onClick={(e) => e.stopPropagation()}>
        {title && <div className="cm-title">{title}</div>}
        {message && <div className="cm-message">{message}</div>}
        <div className="cm-actions">
          <button className="cm-btn cm-btn-confirm" onClick={onConfirm}>
            {confirmLabel}
          </button>
          <button className="cm-btn cm-btn-cancel" onClick={onCancel}>
            {cancelLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
