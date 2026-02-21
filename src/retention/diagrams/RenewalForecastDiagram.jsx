import { useState } from 'react';

const stages = [
  {
    id: 'total',
    label: 'Total Pipeline',
    value: 2400000,
    accounts: 48,
    color: 'var(--text-secondary)',
    barColor: 'var(--bg-elevated)',
    criteria: [
      'All accounts with renewal dates in the forecast period',
      'Includes active, at-risk, and expansion candidates',
      'Baseline ARR from current contracts',
    ],
  },
  {
    id: 'committed',
    label: 'Committed',
    value: 1440000,
    accounts: 28,
    color: '#4ade80',
    barColor: '#4ade80',
    criteria: [
      'Strong signals across all six dimensions',
      'Active executive sponsor confirmed',
      'Usage trending flat or up quarter-over-quarter',
      'Verbal or written renewal intent received',
    ],
  },
  {
    id: 'swing',
    label: 'At Risk - Swing',
    value: 840000,
    accounts: 17,
    color: '#ffad76',
    barColor: '#ffad76',
    criteria: [
      'Declining signals in 2+ dimensions but a viable save path exists',
      'Critical red flags present: champion left, exec ghosting, usage cliff',
      'With the right strategy and execution, can be won back',
      'May require commercial concession or executive re-engagement',
      'Highest strategic leverage — the gap between base case and best case',
    ],
  },
  {
    id: 'omit',
    label: 'Predicted Churn',
    value: 120000,
    accounts: 3,
    color: '#ff6b6b',
    barColor: '#ff6b6b',
    criteria: [
      'Intervention failed or no viable path to save',
      'Customer has communicated intent to leave',
      'Complete disengagement across all dimensions',
      'Competitive displacement confirmed',
      'Omitted from the forecast — written off as predicted churn',
    ],
  },
];

function formatCurrency(n) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${n}`;
}

export default function RenewalForecastDiagram() {
  const [activeStage, setActiveStage] = useState(null);

  const maxValue = stages[0].value;
  const committedStage = stages.find(s => s.id === 'committed');
  const swingStage = stages.find(s => s.id === 'swing');
  const omitStage = stages.find(s => s.id === 'omit');
  const totalExposure = (swingStage?.value || 0) + (omitStage?.value || 0);
  const retentionRate = ((1 - (omitStage?.value || 0) / maxValue) * 100).toFixed(0);

  return (
    <div className="forecast-diagram">
      <div className="forecast-diagram__chart">
        {stages.map((stage) => {
          const barHeight = (stage.value / maxValue) * 200;
          const isActive = activeStage === stage.id;

          return (
            <div
              key={stage.id}
              role="button"
              tabIndex={0}
              aria-label={`${stage.label}: ${formatCurrency(stage.value)}, ${stage.accounts} accounts`}
              className={`forecast-diagram__bar-group ${isActive ? 'forecast-diagram__bar-group--active' : ''}`}
              onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActiveStage(activeStage === stage.id ? null : stage.id); } }}
            >
              <span className="forecast-diagram__value" style={{ color: stage.color }}>
                {formatCurrency(stage.value)}
              </span>
              <div
                className="forecast-diagram__bar"
                style={{
                  height: `${barHeight}px`,
                  background: stage.barColor,
                  opacity: activeStage && !isActive ? 0.3 : 1,
                }}
              />
              <span className="forecast-diagram__label">{stage.label}</span>
              {stage.subtitle && (
                <span className="forecast-diagram__subtitle">{stage.subtitle}</span>
              )}
              <span className="forecast-diagram__accounts">
                {stage.accounts} accounts
              </span>
            </div>
          );
        })}
      </div>

      {/* Forecast summary */}
      <div className="forecast-diagram__summary glass">
        <div className="forecast-diagram__summary-row">
          <span className="forecast-diagram__summary-label">Committed ARR</span>
          <span className="forecast-diagram__summary-value" style={{ color: '#4ade80' }}>
            {formatCurrency(committedStage?.value || 0)}
          </span>
        </div>
        <div className="forecast-diagram__summary-row">
          <span className="forecast-diagram__summary-label">Gross Retention Rate</span>
          <span className="forecast-diagram__summary-value">
            {retentionRate}%
          </span>
        </div>
        <div className="forecast-diagram__summary-row">
          <span className="forecast-diagram__summary-label">Total Exposure</span>
          <span className="forecast-diagram__summary-value" style={{ color: '#ff6b6b' }}>
            {formatCurrency(totalExposure)}
          </span>
        </div>
        <div className="forecast-diagram__summary-row">
          <span className="forecast-diagram__summary-label">Swing Upside</span>
          <span className="forecast-diagram__summary-value" style={{ color: '#ffad76' }}>
            {formatCurrency(swingStage?.value || 0)}
          </span>
        </div>
      </div>

      {/* Detail panel */}
      {activeStage && (
        <div className="forecast-diagram__detail">
          <h4 className="forecast-diagram__detail-title">
            <span
              className="forecast-diagram__detail-dot"
              style={{ background: stages.find(s => s.id === activeStage)?.color }}
            />
            {stages.find(s => s.id === activeStage)?.label} — Confidence Criteria
          </h4>
          <ul className="forecast-diagram__detail-list">
            {stages.find(s => s.id === activeStage)?.criteria.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}

      {!activeStage && (
        <p className="forecast-diagram__hint">
          Click a bar to see confidence tier criteria
        </p>
      )}

      <p className="forecast-diagram__disclaimer">
        Illustrative data. Numbers represent a hypothetical mid-market SaaS renewal cohort.
      </p>

      <style>{`
        .forecast-diagram__chart {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 12px;
          padding: 20px 0 0;
          min-height: 280px;
        }

        .forecast-diagram__bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          flex: 1;
          max-width: 100px;
          transition: opacity var(--transition);
          outline: none;
        }

        .forecast-diagram__bar-group:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 4px;
          border-radius: 4px;
        }

        .forecast-diagram__value {
          font-size: 13px;
          font-weight: 700;
          font-variant-numeric: tabular-nums;
        }

        .forecast-diagram__bar {
          width: 100%;
          border-radius: 6px 6px 2px 2px;
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          min-height: 8px;
          position: relative;
        }

        .forecast-diagram__bar-group--active .forecast-diagram__bar {
          transform: scaleX(1.05);
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }

        .forecast-diagram__label {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-primary);
          text-align: center;
          white-space: nowrap;
        }

        .forecast-diagram__subtitle {
          font-size: 9px;
          font-weight: 500;
          color: var(--text-tertiary);
          text-align: center;
          white-space: nowrap;
          margin-top: -4px;
        }

        .forecast-diagram__accounts {
          font-size: 10px;
          color: var(--text-tertiary);
        }

        .forecast-diagram__summary {
          display: flex;
          gap: 24px;
          padding: 16px 24px;
          margin-top: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .forecast-diagram__summary-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .forecast-diagram__summary-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--text-tertiary);
        }

        .forecast-diagram__summary-value {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          font-variant-numeric: tabular-nums;
        }

        .forecast-diagram__detail {
          margin-top: 20px;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          animation: fadeInUp 0.25s ease both;
        }

        .forecast-diagram__detail-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .forecast-diagram__detail-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .forecast-diagram__detail-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .forecast-diagram__detail-list li {
          font-size: 12px;
          color: var(--text-secondary);
          padding-left: 14px;
          position: relative;
          line-height: 1.5;
        }

        .forecast-diagram__detail-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.5;
        }

        .forecast-diagram__hint {
          text-align: center;
          font-size: 12px;
          color: var(--text-tertiary);
          margin-top: 16px;
          font-style: italic;
        }

        .forecast-diagram__disclaimer {
          text-align: center;
          font-size: 10px;
          color: var(--text-tertiary);
          margin-top: 12px;
          font-style: italic;
          opacity: 0.6;
        }

        @media (max-width: 640px) {
          .forecast-diagram__chart {
            gap: 6px;
          }

          .forecast-diagram__value {
            font-size: 11px;
          }

          .forecast-diagram__label {
            font-size: 9px;
          }

          .forecast-diagram__summary {
            gap: 16px;
            padding: 12px 16px;
          }
        }
      `}</style>
    </div>
  );
}
