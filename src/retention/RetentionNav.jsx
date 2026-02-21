import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

export default function RetentionNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="ra-nav">
      <div className="ra-nav__inner">
        <Link to="/" className="ra-nav__back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          <span>Portfolio</span>
        </Link>

        <span className="ra-nav__title">Retention Architecture</span>

        <button
          className="ra-nav__theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          )}
        </button>
      </div>

      <style>{`
        .ra-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: var(--nav-scrolled-bg);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 0 40px;
        }

        .ra-nav__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 56px;
        }

        .ra-nav__back {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--transition);
        }

        .ra-nav__back:hover {
          color: var(--text-primary);
        }

        .ra-nav__title {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.3px;
          color: var(--text-primary);
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .ra-nav__theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition);
          flex-shrink: 0;
        }

        .ra-nav__theme-toggle:hover {
          border-color: var(--border-hover);
          color: var(--accent);
          background: var(--accent-soft);
        }

        @media (max-width: 640px) {
          .ra-nav {
            padding: 0 20px;
          }

          .ra-nav__back span {
            display: none;
          }

          .ra-nav__title {
            font-size: 12px;
          }
        }
      `}</style>
    </nav>
  );
}
