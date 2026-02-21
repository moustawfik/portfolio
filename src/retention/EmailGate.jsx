import { useState } from 'react';
import { useEmailGate } from './EmailContext';
import { supabase } from './supabaseClient';

export default function EmailGate() {
  const { unlock } = useEmailGate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      if (supabase) {
        const { error: insertError } = await supabase
          .from('retention_emails')
          .insert({ email, source: 'retention-architecture' });

        // Unique constraint violation means they already submitted — treat as success
        if (insertError && !insertError.message?.includes('duplicate')) {
          throw insertError;
        }
      }
      unlock(email);
    } catch (err) {
      console.error('Email gate error:', err);
      // Still unlock on network failure — don't block the content experience
      unlock(email);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-gate">
      <div className="email-gate__card glass">
        <div className="email-gate__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
        </div>
        <h3 className="email-gate__title">Unlock the full framework</h3>
        <p className="email-gate__desc">
          Enter your email to access deep-dive implementation content across all nine pillars.
        </p>
        <form className="email-gate__form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="email-gate__input"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <button
            type="submit"
            className="email-gate__btn"
            disabled={loading}
          >
            {loading ? 'Unlocking...' : 'Get Access'}
          </button>
        </form>
        {error && <p className="email-gate__error">{error}</p>}
        <p className="email-gate__privacy">
          No spam. Used only for framework access.
        </p>
      </div>

      <style>{`
        .email-gate {
          position: absolute;
          inset: 0;
          z-index: 3;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 40px;
        }

        .email-gate__card {
          max-width: 380px;
          width: 100%;
          padding: 36px 32px;
          text-align: center;
          animation: fadeInUp 0.3s ease both;
        }

        .email-gate__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--accent-soft);
          color: var(--accent);
          margin-bottom: 16px;
        }

        .email-gate__title {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .email-gate__desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .email-gate__form {
          display: flex;
          gap: 8px;
        }

        .email-gate__input {
          flex: 1;
          padding: 10px 14px;
          font-size: 13px;
          font-family: inherit;
          color: var(--text-primary);
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          outline: none;
          transition: border-color var(--transition);
        }

        .email-gate__input:focus {
          border-color: var(--border-hover);
        }

        .email-gate__input::placeholder {
          color: var(--text-tertiary);
        }

        .email-gate__btn {
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 600;
          font-family: inherit;
          color: #fff;
          background: var(--gradient-primary);
          border: none;
          border-radius: var(--radius-sm);
          cursor: pointer;
          white-space: nowrap;
          transition: all var(--transition);
        }

        .email-gate__btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        .email-gate__btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .email-gate__error {
          font-size: 12px;
          color: var(--accent);
          margin-top: 8px;
        }

        .email-gate__privacy {
          font-size: 11px;
          color: var(--text-tertiary);
          margin-top: 12px;
        }

        @media (max-width: 640px) {
          .email-gate__form {
            flex-direction: column;
          }

          .email-gate__card {
            padding: 28px 24px;
            margin: 0 16px;
          }
        }
      `}</style>
    </div>
  );
}
