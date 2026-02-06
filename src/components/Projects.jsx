import { projects } from '../data';

const cardAccents = [
  { border: 'rgba(255, 107, 107, 0.2)', bg: 'rgba(255, 107, 107, 0.04)' },
  { border: 'rgba(255, 173, 118, 0.2)', bg: 'rgba(255, 173, 118, 0.04)' },
  { border: 'rgba(251, 215, 134, 0.2)', bg: 'rgba(251, 215, 134, 0.04)' },
  { border: 'rgba(247, 121, 125, 0.2)', bg: 'rgba(247, 121, 125, 0.04)' },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section">
        <p className="section-label">Selected Work</p>
        <h2 className="section-title">Projects</h2>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              className="project-card glass"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div
                className="project-card__accent-line"
                style={{
                  background: `linear-gradient(90deg, ${cardAccents[i % cardAccents.length].border}, transparent)`,
                }}
              />
              <div className="project-card__number">0{i + 1}</div>
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <svg className="project-card__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7.8H7.8"/>
                </svg>
              </div>
              <p className="project-card__desc">{project.description}</p>
              <p className="project-card__tags">
                {project.tags.join(' · ')}
              </p>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .projects__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .project-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all var(--transition);
          animation: fadeInUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both;
        }

        .project-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }

        .project-card__accent-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          border-radius: 2px 2px 0 0;
        }

        .project-card__number {
          font-size: 11px;
          font-weight: 600;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 1px;
        }

        .project-card__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .project-card__title {
          font-size: 17px;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.2px;
        }

        .project-card__arrow {
          flex-shrink: 0;
          color: var(--text-tertiary);
          transition: all var(--transition);
          margin-top: 2px;
        }

        .project-card:hover .project-card__arrow {
          color: var(--accent);
          transform: translate(2px, -2px);
        }

        .project-card__desc {
          font-size: 13px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.65;
          flex: 1;
        }

        .project-card__tags {
          font-size: 11px;
          font-weight: 500;
          color: var(--text-tertiary);
          letter-spacing: 0.3px;
          margin-top: 4px;
        }

        @media (max-width: 640px) {
          .projects__grid {
            grid-template-columns: 1fr;
          }

          .project-card {
            padding: 22px;
          }
        }
      `}</style>
    </section>
  );
}
