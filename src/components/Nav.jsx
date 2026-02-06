import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          background: rgba(20, 21, 23, 0.92);
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
          background: rgba(20, 21, 23, 0.98);
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
        }
      `}</style>
    </nav>
  );
}
