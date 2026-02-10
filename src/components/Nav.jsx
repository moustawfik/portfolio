import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#" className="nav__logo">
          <span className="nav__logo-icon" />
        </a>

        <div className="nav__links">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} className="nav__link">{label}</a>
          ))}
        </div>

        <button
          className="nav__theme-toggle"
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

        <button
          className={`nav__hamburger ${mobileOpen ? 'nav__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className="nav__mobile">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav__mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 0 40px;
          transition: var(--transition-slow);
        }

        .nav--scrolled {
          background: var(--nav-scrolled-bg);
          border-bottom: 1px solid var(--border);
        }

        .nav__inner {
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }

        .nav__logo {
          display: flex;
          align-items: center;
        }

        .nav__logo-icon {
          display: block;
          width: 120px;
          height: 80px;
          background: var(--gradient-primary);
          -webkit-mask: url('/logo.svg') no-repeat center / contain;
          mask: url('/logo.svg') no-repeat center / contain;
        }

        .nav__links {
          display: flex;
          gap: 32px;
        }

        .nav__link {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--transition);
          letter-spacing: 0.2px;
        }

        .nav__link:hover {
          color: var(--text-primary);
        }

        .nav__theme-toggle {
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

        .nav__theme-toggle:hover {
          border-color: var(--border-hover);
          color: var(--accent);
          background: var(--accent-soft);
        }

        .nav__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          margin-right: -8px;
        }

        .nav__hamburger span {
          display: block;
          width: 18px;
          height: 1.5px;
          background: var(--text-secondary);
          border-radius: 1px;
          transition: var(--transition);
        }

        .nav__hamburger--open span:first-child {
          transform: rotate(45deg) translate(2.3px, 2.3px);
        }

        .nav__hamburger--open span:last-child {
          transform: rotate(-45deg) translate(2.3px, -2.3px);
        }

        .nav__mobile {
          position: fixed;
          inset: 64px 0 0 0;
          background: var(--nav-mobile-bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 36px;
          animation: fadeInUp 0.3s ease;
        }

        .nav__mobile-link {
          font-size: 20px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--transition);
        }

        .nav__mobile-link:hover {
          color: var(--text-primary);
        }

        @media (max-width: 640px) {
          .nav__links {
            display: none;
          }

          .nav__hamburger {
            display: flex;
          }

          .nav__theme-toggle {
            margin-left: auto;
            margin-right: 12px;
          }
        }
      `}</style>
    </nav>
  );
}
