import { retentionMeta, pillars } from './data/pillars';
import PillarCard from './components/PillarCard';

export default function RetentionLanding() {
  return (
    <section className="ra-landing">
      <div className="ra-landing__header">
        <p className="section-label">Framework</p>
        <h1 className="ra-landing__title">{retentionMeta.title}</h1>
        <p className="ra-landing__subtitle">{retentionMeta.subtitle}</p>
      </div>

      <div className="ra-landing__grid">
        {pillars.map((pillar, i) => (
          <PillarCard key={pillar.slug} pillar={pillar} index={i} />
        ))}
      </div>

      <div className="ra-landing__footer">
        <p className="ra-landing__attribution">
          Built by Mous Tawfik
        </p>
      </div>

      <style>{`
        .ra-landing {
          max-width: 960px;
          margin: 0 auto;
          padding: 48px 40px 80px;
        }

        .ra-landing__header {
          margin-bottom: 48px;
          animation: fadeInUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both;
        }

        .ra-landing__title {
          font-size: 36px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .ra-landing__subtitle {
          font-size: 15px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 560px;
        }

        .ra-landing__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .ra-landing__footer {
          margin-top: 64px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          text-align: center;
        }

        .ra-landing__attribution {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-tertiary);
          letter-spacing: 0.3px;
        }

        @media (max-width: 900px) {
          .ra-landing__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .ra-landing {
            padding: 36px 24px 60px;
          }

          .ra-landing__title {
            font-size: 28px;
          }

          .ra-landing__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
