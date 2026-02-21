export default function ContentSection({ section }) {
  return (
    <div className="content-section">
      {section.heading && (
        <h2 className="content-section__heading">{section.heading}</h2>
      )}

      {section.body && section.body.map((paragraph, i) => (
        <p key={i} className="content-section__body">{paragraph}</p>
      ))}

      {section.bullets && (
        <ul className="content-section__bullets">
          {section.bullets.map((item, i) => (
            <li key={i} className="content-section__bullet">{item}</li>
          ))}
        </ul>
      )}

      {section.callout && (
        <div className={`content-section__callout content-section__callout--${section.callout.type}`}>
          <div className="content-section__callout-icon">
            {section.callout.type === 'insight' && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            )}
            {section.callout.type === 'example' && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
                <path d="M10 9H8" />
              </svg>
            )}
            {section.callout.type === 'warning' && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            )}
          </div>
          <p className="content-section__callout-text">{section.callout.text}</p>
        </div>
      )}

      {section.table && (
        <div className="content-section__table-wrap">
          <table className="content-section__table">
            <thead>
              <tr>
                {section.table.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <style>{`
        .content-section {
          position: relative;
          margin-bottom: 40px;
        }

        .content-section__heading {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 16px;
          letter-spacing: -0.2px;
        }

        .content-section__body {
          font-size: 15px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 16px;
        }

        .content-section__bullets {
          margin: 16px 0 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .content-section__bullet {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          padding-left: 20px;
          position: relative;
        }

        .content-section__bullet::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.6;
        }

        .content-section__callout {
          display: flex;
          gap: 14px;
          padding: 20px 24px;
          border-radius: var(--radius-md);
          background: var(--bg-card);
          border: 1px solid var(--border);
          margin: 24px 0;
        }

        .content-section__callout--insight {
          border-left: 3px solid var(--accent);
        }

        .content-section__callout--example {
          border-left: 3px solid var(--accent-secondary);
        }

        .content-section__callout--warning {
          border-left: 3px solid #fbd786;
        }

        .content-section__callout-icon {
          flex-shrink: 0;
          color: var(--text-tertiary);
          margin-top: 2px;
        }

        .content-section__callout--insight .content-section__callout-icon {
          color: var(--accent);
        }

        .content-section__callout--example .content-section__callout-icon {
          color: var(--accent-secondary);
        }

        .content-section__callout--warning .content-section__callout-icon {
          color: #fbd786;
        }

        .content-section__callout-text {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          line-height: 1.6;
          font-style: italic;
        }

        .content-section__table-wrap {
          overflow-x: auto;
          margin: 24px 0;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
        }

        .content-section__table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        .content-section__table th {
          text-align: left;
          padding: 12px 16px;
          font-weight: 600;
          color: var(--text-primary);
          background: var(--bg-card);
          border-bottom: 1px solid var(--border);
          white-space: nowrap;
        }

        .content-section__table td {
          padding: 10px 16px;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border);
        }

        .content-section__table tr:last-child td {
          border-bottom: none;
        }

        @media (max-width: 640px) {
          .content-section__heading {
            font-size: 18px;
          }

          .content-section__callout {
            padding: 16px 18px;
          }
        }
      `}</style>
    </div>
  );
}
