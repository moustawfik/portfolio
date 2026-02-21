import { useState, useMemo } from 'react';

const defaultDimensions = [
  { id: 'usage', label: 'Product Usage', weight: 30, color: '#ff6b6b', description: 'DAU/MAU ratio, feature adoption depth, session frequency, time in platform' },
  { id: 'engagement', label: 'Engagement', weight: 20, color: '#ffad76', description: 'Meeting attendance, response times, champion activity level, communication frequency' },
  { id: 'support', label: 'Support Health', weight: 15, color: '#fbd786', description: 'Ticket volume trend, CSAT scores, escalation rate, time to resolution' },
  { id: 'relationship', label: 'Relationship', weight: 20, color: '#f7797d', description: 'Stakeholder coverage, executive sponsor access, NPS, multi-threading depth' },
  { id: 'commercial', label: 'Commercial', weight: 15, color: '#fccb90', description: 'Expansion pipeline, contract utilization, payment history, renewal sentiment' },
];

export default function HealthScoreDiagram() {
  const [weights, setWeights] = useState(() =>
    Object.fromEntries(defaultDimensions.map(d => [d.id, d.weight]))
  );
  const [activeDimension, setActiveDimension] = useState(null);

  const totalWeight = useMemo(() =>
    Object.values(weights).reduce((a, b) => a + b, 0),
    [weights]
  );

  const normalizedWeights = useMemo(() => {
    if (totalWeight === 0) return weights;
    return Object.fromEntries(
      Object.entries(weights).map(([k, v]) => [k, (v / totalWeight) * 100])
    );
  }, [weights, totalWeight]);

  // Simulated score: each dimension gets a random-ish illustrative score
  const dimensionScores = useMemo(() => ({
    usage: 78,
    engagement: 65,
    support: 82,
    relationship: 54,
    commercial: 71,
  }), []);

  const compositeScore = useMemo(() => {
    return Math.round(
      defaultDimensions.reduce((sum, d) => {
        return sum + (dimensionScores[d.id] * normalizedWeights[d.id]) / 100;
      }, 0)
    );
  }, [normalizedWeights, dimensionScores]);

  const handleWeightChange = (id, value) => {
    setWeights(prev => ({ ...prev, [id]: Number(value) }));
  };

  const resetWeights = () => {
    setWeights(Object.fromEntries(defaultDimensions.map(d => [d.id, d.weight])));
  };

  const getScoreColor = (score) => {
    if (score >= 75) return '#4ade80';
    if (score >= 50) return '#ffad76';
    return '#ff6b6b';
  };

  return (
    <div className="health-diagram">
      {/* Composite score display */}
      <div className="health-diagram__score-display">
        <div className="health-diagram__score-circle" style={{ borderColor: getScoreColor(compositeScore) }}>
          <span className="health-diagram__score-number" style={{ color: getScoreColor(compositeScore) }}>
            {compositeScore}
          </span>
          <span className="health-diagram__score-label">Composite</span>
        </div>
      </div>

      {/* Horizontal stacked bar */}
      <div className="health-diagram__bar">
        {defaultDimensions.map((dim) => {
          const pct = normalizedWeights[dim.id];
          const isActive = activeDimension === dim.id;
          return (
            <div
              key={dim.id}
              role="button"
              tabIndex={0}
              aria-label={`${dim.label}: ${Math.round(pct)}%`}
              className={`health-diagram__segment ${isActive ? 'health-diagram__segment--active' : ''}`}
              style={{
                width: `${pct}%`,
                background: dim.color,
                opacity: activeDimension && !isActive ? 0.3 : 1,
              }}
              onMouseEnter={() => setActiveDimension(dim.id)}
              onMouseLeave={() => setActiveDimension(null)}
              onFocus={() => setActiveDimension(dim.id)}
              onBlur={() => setActiveDimension(null)}
              title={`${dim.label}: ${Math.round(pct)}%`}
            />
          );
        })}
      </div>

      {/* Weight controls */}
      <div className="health-diagram__controls">
        {defaultDimensions.map((dim) => {
          const isActive = activeDimension === dim.id;
          return (
            <div
              key={dim.id}
              className={`health-diagram__control ${isActive ? 'health-diagram__control--active' : ''}`}
              onMouseEnter={() => setActiveDimension(dim.id)}
              onMouseLeave={() => setActiveDimension(null)}
            >
              <div className="health-diagram__control-header">
                <span className="health-diagram__control-dot" style={{ background: dim.color }} />
                <span className="health-diagram__control-label">{dim.label}</span>
                <span className="health-diagram__control-pct">{Math.round(normalizedWeights[dim.id])}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                value={weights[dim.id]}
                onChange={(e) => handleWeightChange(dim.id, e.target.value)}
                className="health-diagram__slider"
                style={{ '--slider-color': dim.color }}
                aria-label={`${dim.label} weight`}
              />
              <div className="health-diagram__control-meta">
                <span className="health-diagram__control-score">
                  Score: {dimensionScores[dim.id]}/100
                </span>
              </div>
              {isActive && (
                <p className="health-diagram__control-desc">{dim.description}</p>
              )}
            </div>
          );
        })}
      </div>

      <button className="health-diagram__reset" onClick={resetWeights}>
        Reset to defaults
      </button>

      <p className="health-diagram__disclaimer">
        Adjust weights to model different customer segments. Scores are illustrative.
      </p>

      <style>{`
        .health-diagram {
          position: relative;
        }

        .health-diagram__score-display {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }

        .health-diagram__score-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 3px solid;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s ease;
        }

        .health-diagram__score-number {
          font-size: 28px;
          font-weight: 700;
          line-height: 1;
          font-variant-numeric: tabular-nums;
          transition: color 0.3s ease;
        }

        .health-diagram__score-label {
          font-size: 9px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-tertiary);
          margin-top: 2px;
        }

        .health-diagram__bar {
          display: flex;
          height: 24px;
          border-radius: 12px;
          overflow: hidden;
          gap: 2px;
          margin-bottom: 24px;
        }

        .health-diagram__segment {
          transition: all 0.3s ease;
          cursor: pointer;
          min-width: 4px;
        }

        .health-diagram__segment--active {
          transform: scaleY(1.15);
        }

        .health-diagram__controls {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          margin-bottom: 16px;
        }

        .health-diagram__control {
          padding: 12px 14px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          transition: all var(--transition);
        }

        .health-diagram__control--active {
          border-color: var(--border-hover);
          background: var(--bg-card-hover);
        }

        .health-diagram__control-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .health-diagram__control-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .health-diagram__control-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
          flex: 1;
        }

        .health-diagram__control-pct {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-secondary);
          font-variant-numeric: tabular-nums;
        }

        .health-diagram__slider {
          width: 100%;
          height: 4px;
          -webkit-appearance: none;
          appearance: none;
          background: var(--border);
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }

        .health-diagram__slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--slider-color, var(--accent));
          border: 2px solid var(--bg-primary);
          cursor: pointer;
          transition: transform 0.15s ease;
        }

        .health-diagram__slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .health-diagram__slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--slider-color, var(--accent));
          border: 2px solid var(--bg-primary);
          cursor: pointer;
        }

        .health-diagram__control-meta {
          display: flex;
          justify-content: space-between;
          margin-top: 6px;
        }

        .health-diagram__control-score {
          font-size: 10px;
          color: var(--text-tertiary);
          font-variant-numeric: tabular-nums;
        }

        .health-diagram__control-desc {
          font-size: 11px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-top: 8px;
          animation: fadeInUp 0.2s ease both;
        }

        .health-diagram__reset {
          display: block;
          margin: 0 auto;
          padding: 6px 16px;
          font-size: 11px;
          font-weight: 600;
          color: var(--text-tertiary);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 20px;
          cursor: pointer;
          transition: all var(--transition);
        }

        .health-diagram__reset:hover {
          color: var(--text-secondary);
          border-color: var(--border-hover);
        }

        .health-diagram__disclaimer {
          text-align: center;
          font-size: 10px;
          color: var(--text-tertiary);
          margin-top: 12px;
          font-style: italic;
          opacity: 0.6;
        }

        @media (max-width: 640px) {
          .health-diagram__controls {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
