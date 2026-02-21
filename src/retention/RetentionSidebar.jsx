import { NavLink, useLocation } from 'react-router-dom';
import { pillars } from './data/pillars';

export default function RetentionSidebar() {
  const location = useLocation();
  const isLanding = location.pathname === '/retention-architecture' || location.pathname === '/retention-architecture/';

  return (
    <nav className="ra-sidebar" aria-label="Retention Architecture pillars">
      <div className="ra-sidebar__inner">
        <NavLink
          to="/retention-architecture"
          end
          className={({ isActive }) =>
            `ra-sidebar__item ra-sidebar__item--overview ${isActive ? 'ra-sidebar__item--active' : ''}`
          }
        >
          <span className="ra-sidebar__number">00</span>
          <span className="ra-sidebar__label">Overview</span>
        </NavLink>

        {pillars.map((pillar) => (
          <NavLink
            key={pillar.slug}
            to={`/retention-architecture/${pillar.slug}`}
            className={({ isActive }) =>
              `ra-sidebar__item ${isActive ? 'ra-sidebar__item--active' : ''}`
            }
          >
            <span
              className="ra-sidebar__dot"
              style={{ background: pillar.accentColor }}
            />
            <span className="ra-sidebar__number">
              {String(pillar.number).padStart(2, '0')}
            </span>
            <span className="ra-sidebar__label">{pillar.shortTitle}</span>
          </NavLink>
        ))}
      </div>

      {/* Mobile horizontal pills */}
      {!isLanding && (
        <div className="ra-sidebar__mobile">
          {pillars.map((pillar) => (
            <NavLink
              key={pillar.slug}
              to={`/retention-architecture/${pillar.slug}`}
              className={({ isActive }) =>
                `ra-sidebar__pill ${isActive ? 'ra-sidebar__pill--active' : ''}`
              }
            >
              <span
                className="ra-sidebar__pill-dot"
                style={{ background: pillar.accentColor }}
              />
              {pillar.shortTitle}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        .ra-sidebar {
          position: fixed;
          top: 56px;
          left: 0;
          bottom: 0;
          width: 220px;
          border-right: 1px solid var(--border);
          background: var(--bg-primary);
          overflow-y: auto;
          z-index: 50;
          padding: 16px 0;
        }

        .ra-sidebar__inner {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 0 12px;
        }

        .ra-sidebar__item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all var(--transition);
          position: relative;
        }

        .ra-sidebar__item:hover {
          color: var(--text-primary);
          background: var(--bg-card);
        }

        .ra-sidebar__item--active {
          color: var(--text-primary);
          background: var(--bg-card);
        }

        .ra-sidebar__item--active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          bottom: 6px;
          width: 2px;
          background: var(--accent);
          border-radius: 1px;
        }

        .ra-sidebar__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          opacity: 0.6;
        }

        .ra-sidebar__item--active .ra-sidebar__dot {
          opacity: 1;
        }

        .ra-sidebar__number {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-tertiary);
          font-variant-numeric: tabular-nums;
          min-width: 18px;
        }

        .ra-sidebar__label {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ra-sidebar__lock {
          flex-shrink: 0;
          color: var(--text-tertiary);
          opacity: 0.5;
        }

        .ra-sidebar__mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .ra-sidebar {
            display: none;
          }

          .ra-sidebar__mobile {
            display: flex;
            position: fixed;
            top: 56px;
            left: 0;
            right: 0;
            z-index: 50;
            background: var(--bg-primary);
            border-bottom: 1px solid var(--border);
            padding: 10px 20px;
            gap: 8px;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }

          .ra-sidebar__mobile::-webkit-scrollbar {
            display: none;
          }

          .ra-sidebar__pill {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            color: var(--text-secondary);
            background: var(--bg-card);
            border: 1px solid var(--border);
            white-space: nowrap;
            transition: all var(--transition);
            flex-shrink: 0;
          }

          .ra-sidebar__pill:hover {
            border-color: var(--border-hover);
            color: var(--text-primary);
          }

          .ra-sidebar__pill--active {
            color: var(--text-primary);
            border-color: var(--border-hover);
            background: var(--accent-soft);
          }

          .ra-sidebar__pill-dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            flex-shrink: 0;
          }
        }
      `}</style>
    </nav>
  );
}
