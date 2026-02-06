import { skills } from '../data';

const categoryStyles = [
  {
    gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
    accent: '#ff6b6b',
    accentSoft: 'rgba(255, 107, 107, 0.12)',
    dot: '#ff6b6b',
  },
  {
    gradient: 'linear-gradient(135deg, #ffad76, #f7797d)',
    accent: '#ffad76',
    accentSoft: 'rgba(255, 173, 118, 0.12)',
    dot: '#ffad76',
  },
  {
    gradient: 'linear-gradient(135deg, #fbd786, #f7797d)',
    accent: '#fbd786',
    accentSoft: 'rgba(251, 215, 134, 0.10)',
    dot: '#fbd786',
  },
  {
    gradient: 'linear-gradient(135deg, #fccb90, #ee5a24)',
    accent: '#fccb90',
    accentSoft: 'rgba(252, 203, 144, 0.12)',
    dot: '#fccb90',
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section">
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">Skills</h2>

        <div className="skills__grid">
          {skills.map((group, i) => {
            const style = categoryStyles[i % categoryStyles.length];
            return (
              <div
                key={group.category}
                className="skill-group glass"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
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
            );
          })}
        </div>
      </div>

      <style>{`
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .skill-group {
          padding: 28px;
          animation: fadeInUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both;
          transition: all var(--transition);
        }

        .skill-group:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
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
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .skill-group__list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .skill-group__item {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary);
          padding-left: 16px;
          position: relative;
          line-height: 1.4;
          transition: color var(--transition);
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

        .skill-group__item:hover {
          color: var(--text-primary);
          filter: brightness(1.1);
        }

        @media (max-width: 640px) {
          .skills__grid {
            grid-template-columns: 1fr;
          }

          .skill-group {
            padding: 22px;
          }
        }
      `}</style>
    </section>
  );
}
