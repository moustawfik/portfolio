import { useState } from 'react';
import { skills } from '../data';

const categoryStyles = [
  // Technical & Product — coral to orange
  {
    gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
    dot: '#ff6b6b',
  },
  // Creative — peach to rose
  {
    gradient: 'linear-gradient(135deg, #ffad76, #f7797d)',
    dot: '#ffad76',
  },
  // Operations — gold to coral
  {
    gradient: 'linear-gradient(135deg, #fbd786, #ee5a24)',
    dot: '#fbd786',
  },
  // Commercial — rose to deep coral
  {
    gradient: 'linear-gradient(135deg, #f7797d, #c0392b)',
    dot: '#f7797d',
  },
  // Analytical — warm cream to peach
  {
    gradient: 'linear-gradient(135deg, #fccb90, #f7797d)',
    dot: '#fccb90',
  },
  // Executive — soft orange to gold
  {
    gradient: 'linear-gradient(135deg, #e8a87c, #d4a574)',
    dot: '#e8a87c',
  },
];

export default function Skills() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (i) => {
    setExpanded(expanded === i ? null : i);
  };

  return (
    <section id="skills">
      <div className="section">
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">Skills</h2>

        <div className="skills__grid">
          {skills.map((group, i) => {
            const style = categoryStyles[i % categoryStyles.length];
            const isOpen = expanded === i;
            return (
              <div
                key={group.category}
                className={`skill-group glass ${isOpen ? 'skill-group--open' : ''}`}
                style={{ animationDelay: `${i * 0.08}s` }}
                onClick={() => toggle(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggle(i);
                  }
                }}
              >
                <div className="skill-group__header">
                  <div>
                    <h3
                      className="skill-group__title"
                      style={{
                        background: style.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {group.category}
                    </h3>
                    <p className="skill-group__subheader">{group.subheader}</p>
                  </div>
                  <svg
                    className={`skill-group__chevron ${isOpen ? 'skill-group__chevron--open' : ''}`}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>

                <div
                  className="skill-group__body"
                  style={{
                    maxHeight: isOpen ? `${group.items.length * 36 + 16}px` : '0px',
                  }}
                >
                  <ul className="skill-group__list">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="skill-group__item"
                        style={{ '--dot-color': style.dot }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          align-items: start;
        }

        .skill-group {
          padding: 24px 28px;
          animation: fadeInUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both;
          transition: all var(--transition);
          cursor: pointer;
          user-select: none;
        }

        .skill-group:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .skill-group__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .skill-group__title {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.2px;
          margin-bottom: 6px;
        }

        .skill-group__subheader {
          font-size: 13px;
          font-weight: 400;
          font-style: italic;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .skill-group__chevron {
          flex-shrink: 0;
          color: var(--text-tertiary);
          transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          margin-top: 4px;
        }

        .skill-group__chevron--open {
          transform: rotate(180deg);
        }

        .skill-group:hover .skill-group__chevron {
          color: var(--text-secondary);
        }

        .skill-group__body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .skill-group__list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 16px;
        }

        .skill-group__item {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary);
          padding-left: 16px;
          position: relative;
          line-height: 1.4;
        }

        .skill-group__item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 7px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--dot-color);
          opacity: 0.8;
        }

        @media (max-width: 640px) {
          .skills__grid {
            grid-template-columns: 1fr;
          }

          .skill-group {
            padding: 20px 22px;
          }
        }
      `}</style>
    </section>
  );
}
