export default function Footer() {
  return (
    <footer className="footer">
      <div className="section footer__inner">
        <span className="footer__text">
          {new Date().getFullYear()}
        </span>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--border);
        }

        .footer .section {
          padding: 24px;
        }

        .footer__inner {
          display: flex;
          justify-content: center;
        }

        .footer__text {
          font-size: 12px;
          font-weight: 400;
          color: var(--text-tertiary);
        }
      `}</style>
    </footer>
  );
}
