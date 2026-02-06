import { profile } from '../data';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="section">
        <div className="hero__layout">
          <div className="hero__photo-wrapper">
            <img
              src="/headshot.png"
              alt={profile.name}
              className="hero__photo"
            />
          </div>

          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              {profile.location}
            </div>
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__tagline">{profile.tagline}</p>
            <div className="hero__actions">
              <a href="#projects" className="hero__btn hero__btn--primary">
                View Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7.8H7.8"/>
                </svg>
              </a>
              <a href="#contact" className="hero__btn hero__btn--ghost">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 0;
          display: flex;
          align-items: flex-start;
          padding-top: 120px;
          padding-bottom: 24px;
          position: relative;
        }

        .hero .section {
          padding-top: 0;
          padding-bottom: 0;
        }

        .hero__layout {
          display: flex;
          align-items: center;
          gap: 56px;
          animation: fadeInUp 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) both;
        }

        .hero__photo-wrapper {
          flex-shrink: 0;
        }

        .hero__photo {
          width: 360px;
          height: auto;
          border-radius: 8px;
          object-fit: cover;
          filter: grayscale(1);
          transition: all var(--transition-slow);
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }

        .hero__photo:hover {
          filter: grayscale(0);
        }

        .hero__content {
          max-width: 640px;
        }

        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1px;
          color: var(--text-secondary);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 100px;
          padding: 6px 14px;
          margin-bottom: 28px;
        }

        .hero__badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
        }

        .hero__name {
          font-size: clamp(42px, 7vw, 64px);
          font-weight: 700;
          letter-spacing: -1.5px;
          line-height: 1.05;
          background: linear-gradient(135deg, #f2f0ed 0%, #f2f0ed 30%, #ff6b6b 65%, #ffad76 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
        }

        .hero__tagline {
          font-size: 18px;
          font-weight: 500;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          letter-spacing: -0.2px;
        }

        .hero__bio {
          font-size: 15px;
          font-weight: 400;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 36px;
          max-width: 540px;
        }

        .hero__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hero__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: var(--radius-sm);
          transition: all var(--transition);
          letter-spacing: 0.2px;
        }

        .hero__btn--primary {
          background: var(--gradient-primary);
          color: #fff;
        }

        .hero__btn--primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(255, 107, 107, 0.25);
        }

        .hero__btn--ghost {
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-secondary);
        }

        .hero__btn--ghost:hover {
          border-color: var(--border-hover);
          color: var(--text-primary);
        }

        @media (max-width: 640px) {
          .hero__layout {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }

          .hero__photo {
            width: 260px;
            height: auto;
          }

          .hero__name {
            letter-spacing: -1px;
          }

          .hero__bio {
            font-size: 14px;
          }

          .hero__actions {
            flex-direction: column;
          }

          .hero__btn {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
