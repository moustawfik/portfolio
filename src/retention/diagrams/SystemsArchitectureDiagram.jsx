import { useState } from 'react';

const layers = [
  {
    id: 'data',
    label: 'Data Layer',
    sublabel: 'Collection & Normalization',
    color: '#ff6b6b',
    tools: [
      { id: 'crm', label: 'CRM', detail: 'Accounts, contacts, pipeline, renewal dates, ARR' },
      { id: 'product', label: 'Product Analytics', detail: 'DAU/MAU, feature adoption, session depth, usage velocity' },
      { id: 'support', label: 'Support Platform', detail: 'Ticket volume, CSAT, escalations, response times' },
      { id: 'billing', label: 'Billing', detail: 'Contract values, payment status, expansion revenue, discounts' },
    ],
  },
  {
    id: 'intelligence',
    label: 'Intelligence Layer',
    sublabel: 'Signal Detection & Scoring',
    color: '#ffad76',
    tools: [
      { id: 'health', label: 'Health Scoring', detail: 'Multi-dimensional risk scoring validated against outcomes' },
      { id: 'risk', label: 'Risk Detection', detail: 'Champion departure, usage drops, escalation patterns' },
      { id: 'trends', label: 'Trend Analysis', detail: 'Cohort behavior, seasonal patterns, benchmark comparison' },
    ],
  },
  {
    id: 'action',
    label: 'Action Layer',
    sublabel: 'Execution & Automation',
    color: '#fbd786',
    tools: [
      { id: 'playbooks', label: 'Playbooks', detail: 'Trigger-based workflows for risk, onboarding, expansion' },
      { id: 'tasks', label: 'Task Routing', detail: 'Auto-assignment, escalation paths, SLA enforcement' },
      { id: 'outreach', label: 'Outreach', detail: 'Automated sequences, QBR scheduling, re-engagement' },
    ],
  },
  {
    id: 'reporting',
    label: 'Reporting Layer',
    sublabel: 'Visibility & Accountability',
    color: '#fccb90',
    tools: [
      { id: 'dashboards', label: 'Dashboards', detail: 'Retention rates, forecast accuracy, team performance' },
      { id: 'forecasting', label: 'Forecasting', detail: 'Renewal predictions, pipeline confidence tiers, trend lines' },
      { id: 'feedback', label: 'Feedback Loop', detail: 'Churn post-mortems, model recalibration, process audits' },
    ],
  },
];

const flowArrows = [
  { from: 'data', to: 'intelligence', label: 'Raw signals' },
  { from: 'intelligence', to: 'action', label: 'Actionable insights' },
  { from: 'action', to: 'reporting', label: 'Outcome data' },
];

export default function SystemsArchitectureDiagram() {
  const [activeLayer, setActiveLayer] = useState(null);
  const [activeTool, setActiveTool] = useState(null);

  function handleLayerClick(layerId) {
    if (activeLayer === layerId) {
      setActiveLayer(null);
      setActiveTool(null);
    } else {
      setActiveLayer(layerId);
      setActiveTool(null);
    }
  }

  function handleToolClick(e, toolId, layerId) {
    e.stopPropagation();
    if (activeTool === toolId) {
      setActiveTool(null);
    } else {
      setActiveLayer(layerId);
      setActiveTool(toolId);
    }
  }

  const activeLayerData = activeLayer ? layers.find(l => l.id === activeLayer) : null;
  const activeToolData = activeTool && activeLayerData
    ? activeLayerData.tools.find(t => t.id === activeTool)
    : null;

  return (
    <div className="sys-arch">
      <div className="sys-arch__flow">
        {layers.map((layer, i) => {
          const isActive = !activeLayer || activeLayer === layer.id;
          const isCurrent = activeLayer === layer.id;

          return (
            <div key={layer.id} className="sys-arch__lane">
              {/* Layer card */}
              <div
                className={`sys-arch__layer ${isCurrent ? 'sys-arch__layer--active' : ''}`}
                style={{
                  '--layer-color': layer.color,
                  opacity: isActive ? 1 : 0.35,
                }}
                role="button"
                tabIndex={0}
                onClick={() => handleLayerClick(layer.id)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleLayerClick(layer.id); } }}
              >
                <div className="sys-arch__layer-accent" />
                <div className="sys-arch__layer-content">
                  <h4 className="sys-arch__layer-label">{layer.label}</h4>
                  <p className="sys-arch__layer-sub">{layer.sublabel}</p>
                </div>
                <div className="sys-arch__tools">
                  {layer.tools.map((tool) => (
                    <button
                      key={tool.id}
                      className={`sys-arch__tool ${activeTool === tool.id ? 'sys-arch__tool--active' : ''}`}
                      onClick={(e) => handleToolClick(e, tool.id, layer.id)}
                    >
                      {tool.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flow arrow between layers */}
              {i < layers.length - 1 && (
                <div className="sys-arch__arrow" style={{ opacity: isActive && (!activeLayer || activeLayer === layers[i + 1].id || isCurrent) ? 1 : 0.2 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="var(--text-tertiary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="sys-arch__arrow-label">{flowArrows[i]?.label}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail panel */}
      {activeToolData && (
        <div className="sys-arch__detail">
          <div className="sys-arch__detail-header">
            <span className="sys-arch__detail-dot" style={{ background: activeLayerData.color }} />
            <div>
              <h4 className="sys-arch__detail-title">{activeToolData.label}</h4>
              <p className="sys-arch__detail-layer">{activeLayerData.label}</p>
            </div>
          </div>
          <p className="sys-arch__detail-body">{activeToolData.detail}</p>
        </div>
      )}

      {activeLayer && !activeTool && (
        <div className="sys-arch__detail">
          <div className="sys-arch__detail-header">
            <span className="sys-arch__detail-dot" style={{ background: activeLayerData.color }} />
            <div>
              <h4 className="sys-arch__detail-title">{activeLayerData.label}</h4>
              <p className="sys-arch__detail-layer">{activeLayerData.sublabel}</p>
            </div>
          </div>
          <div className="sys-arch__detail-tools">
            {activeLayerData.tools.map((tool) => (
              <div key={tool.id} className="sys-arch__detail-tool">
                <span className="sys-arch__detail-tool-name">{tool.label}</span>
                <span className="sys-arch__detail-tool-desc">{tool.detail}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {!activeLayer && (
        <p className="sys-arch__hint">Click a layer to explore the architecture</p>
      )}

      <style>{`
        .sys-arch {
          position: relative;
        }

        .sys-arch__flow {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .sys-arch__lane {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sys-arch__layer {
          width: 100%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 20px 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          outline: none;
        }

        .sys-arch__layer:hover {
          border-color: var(--border-hover);
        }

        .sys-arch__layer--active {
          border-color: var(--layer-color);
        }

        .sys-arch__layer-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--layer-color);
          border-radius: 4px 0 0 4px;
        }

        .sys-arch__layer-content {
          margin-bottom: 14px;
          padding-left: 8px;
        }

        .sys-arch__layer-label {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .sys-arch__layer-sub {
          font-size: 12px;
          color: var(--text-tertiary);
          margin: 2px 0 0;
        }

        .sys-arch__tools {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-left: 8px;
        }

        .sys-arch__tool {
          font-size: 11px;
          font-weight: 500;
          font-family: Montserrat, sans-serif;
          color: var(--text-secondary);
          background: var(--bg-elevated, rgba(255,255,255,0.03));
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 5px 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .sys-arch__tool:hover {
          border-color: var(--layer-color);
          color: var(--text-primary);
        }

        .sys-arch__tool--active {
          background: var(--layer-color);
          color: #1a1a1a;
          border-color: var(--layer-color);
          font-weight: 600;
        }

        .sys-arch__arrow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          padding: 8px 0;
          transition: opacity 0.3s ease;
        }

        .sys-arch__arrow svg {
          opacity: 0.4;
        }

        .sys-arch__arrow-label {
          font-size: 10px;
          font-weight: 500;
          color: var(--text-tertiary);
          letter-spacing: 0.3px;
        }

        .sys-arch__detail {
          margin-top: 20px;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          animation: fadeInUp 0.25s ease both;
        }

        .sys-arch__detail-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .sys-arch__detail-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .sys-arch__detail-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .sys-arch__detail-layer {
          font-size: 11px;
          color: var(--text-tertiary);
          margin: 1px 0 0;
        }

        .sys-arch__detail-body {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .sys-arch__detail-tools {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .sys-arch__detail-tool {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 12px 16px;
          background: var(--bg-elevated, rgba(255,255,255,0.02));
          border: 1px solid var(--border);
          border-radius: 8px;
        }

        .sys-arch__detail-tool-name {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .sys-arch__detail-tool-desc {
          font-size: 11px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .sys-arch__hint {
          text-align: center;
          font-size: 12px;
          color: var(--text-tertiary);
          margin-top: 12px;
          font-style: italic;
        }

        @media (max-width: 640px) {
          .sys-arch__layer {
            padding: 16px 18px;
          }

          .sys-arch__tools {
            gap: 6px;
          }

          .sys-arch__tool {
            font-size: 10px;
            padding: 4px 10px;
          }
        }
      `}</style>
    </div>
  );
}
