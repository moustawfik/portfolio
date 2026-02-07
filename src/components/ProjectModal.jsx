import { useEffect, useRef } from 'react';

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  if (!project) return null;

  const { preview } = project;

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <div className="modal-content" ref={contentRef}>
        <button className="modal-close" onClick={onClose} aria-label="Close preview">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-header">
          <p className="modal-label">Preview</p>
          <h3 className="modal-title">{project.title}</h3>
        </div>

        <div className="modal-media">
          {preview?.type === 'video' ? (
            <video
              className="modal-video"
              src={preview.src}
              autoPlay
              loop
              muted
              playsInline
              poster={preview.poster || undefined}
            />
          ) : preview?.type === 'image' ? (
            <img
              className="modal-image"
              src={preview.src}
              alt={preview.alt || `${project.title} preview`}
            />
          ) : (
            <div className="modal-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <p>Preview coming soon</p>
            </div>
          )}
        </div>

        <div className="modal-info">
          <p className="modal-desc">{project.description}</p>
          <p className="modal-tags">{project.tags.join(' \u00b7 ')}</p>
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          animation: modalFadeIn 0.25s ease both;
          padding: 24px;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .modal-content {
          position: relative;
          width: 100%;
          max-width: 720px;
          margin: auto;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          animation: modalSlideUp 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) both;
        }

        .modal-content::-webkit-scrollbar {
          width: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: var(--text-tertiary);
          border-radius: 2px;
        }

        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          transition: all var(--transition);
        }

        .modal-close:hover {
          background: rgba(255, 107, 107, 0.12);
          border-color: var(--border-hover);
          color: var(--text-primary);
        }

        .modal-header {
          padding: 28px 28px 0;
        }

        .modal-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          background: var(--gradient-text);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .modal-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.3px;
        }

        .modal-media {
          margin: 20px 28px 0;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid var(--border);
          background: rgba(0, 0, 0, 0.3);
        }

        .modal-image,
        .modal-video {
          display: block;
          width: 100%;
          height: auto;
        }

        .modal-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 64px 24px;
          color: var(--text-tertiary);
        }

        .modal-placeholder p {
          font-size: 13px;
          font-weight: 500;
        }

        .modal-info {
          padding: 20px 28px 28px;
        }

        .modal-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 12px;
        }

        .modal-tags {
          font-size: 11px;
          font-weight: 500;
          color: var(--text-tertiary);
          letter-spacing: 0.3px;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 640px) {
          .modal-overlay {
            padding: 16px;
            align-items: flex-start;
          }

          .modal-content {
            margin: 0 auto;
          }

          .modal-header {
            padding: 22px 22px 0;
          }

          .modal-media {
            margin: 16px 22px 0;
          }

          .modal-info {
            padding: 16px 22px 22px;
          }

          .modal-title {
            font-size: 19px;
          }
        }
      `}</style>
    </div>
  );
}
