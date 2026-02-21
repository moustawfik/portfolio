export default function DiagramWrapper({ title, children }) {
  return (
    <div className="diagram-wrapper glass">
      {title && (
        <p className="diagram-wrapper__label">{title}</p>
      )}
      <div className="diagram-wrapper__canvas">
        {children}
      </div>

      <style>{`
        .diagram-wrapper {
          padding: 32px;
          margin: 32px 0;
        }

        .diagram-wrapper__label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-tertiary);
          margin-bottom: 20px;
        }

        .diagram-wrapper__canvas {
          overflow: visible;
        }

        @media (max-width: 640px) {
          .diagram-wrapper {
            padding: 20px 16px;
          }
        }
      `}</style>
    </div>
  );
}
