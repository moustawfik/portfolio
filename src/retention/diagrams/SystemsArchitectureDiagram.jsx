import { useState } from 'react';

const nodes = [
  { id: 'hub', label: 'CS Platform', sublabel: 'Orchestration Hub', x: 300, y: 220, isHub: true },
  { id: 'crm', label: 'CRM', sublabel: 'Pipeline & Accounts', x: 100, y: 80 },
  { id: 'support', label: 'Support', sublabel: 'Tickets & CSAT', x: 300, y: 50 },
  { id: 'analytics', label: 'Product Analytics', sublabel: 'Usage & Adoption', x: 500, y: 80 },
  { id: 'comms', label: 'Communication', sublabel: 'Email & Messaging', x: 540, y: 250 },
  { id: 'billing', label: 'Billing', sublabel: 'Revenue & Contracts', x: 480, y: 390 },
  { id: 'warehouse', label: 'Data Warehouse', sublabel: 'Unified Storage', x: 120, y: 390 },
];

const connections = [
  {
    from: 'hub', to: 'crm',
    dataFlows: ['Account metadata', 'Opportunity pipeline', 'Contact records', 'Renewal dates', 'ARR values'],
    direction: 'bidirectional',
  },
  {
    from: 'hub', to: 'support',
    dataFlows: ['Ticket volume trends', 'CSAT scores', 'Escalation flags', 'Response times', 'Topic clustering'],
    direction: 'bidirectional',
  },
  {
    from: 'hub', to: 'analytics',
    dataFlows: ['DAU/MAU ratios', 'Feature adoption', 'Session depth', 'Usage velocity', 'Activation milestones'],
    direction: 'inbound',
  },
  {
    from: 'hub', to: 'comms',
    dataFlows: ['Automated playbook emails', 'Meeting scheduling triggers', 'Engagement sequences', 'Notification routing'],
    direction: 'outbound',
  },
  {
    from: 'hub', to: 'billing',
    dataFlows: ['Contract values', 'Payment status', 'Renewal timelines', 'Expansion revenue', 'Discount history'],
    direction: 'inbound',
  },
  {
    from: 'hub', to: 'warehouse',
    dataFlows: ['Aggregated health scores', 'Historical trends', 'Cohort analysis data', 'Forecast inputs', 'Audit trail'],
    direction: 'outbound',
  },
];

const nodeColors = {
  hub: { bg: 'var(--accent)', text: '#fff', border: 'var(--accent)' },
  crm: { bg: 'var(--bg-card)', text: 'var(--text-primary)', border: '#ff6b6b' },
  support: { bg: 'var(--bg-card)', text: 'var(--text-primary)', border: '#ffad76' },
  analytics: { bg: 'var(--bg-card)', text: 'var(--text-primary)', border: '#fbd786' },
  comms: { bg: 'var(--bg-card)', text: 'var(--text-primary)', border: '#f7797d' },
  billing: { bg: 'var(--bg-card)', text: 'var(--text-primary)', border: '#fccb90' },
  warehouse: { bg: 'var(--bg-card)', text: 'var(--text-primary)', border: '#e8a87c' },
};

function getConnectionPath(from, to) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const cx = from.x + dx * 0.5;
  const cy = from.y + dy * 0.5;
  return `M ${from.x} ${from.y} Q ${cx} ${cy - dy * 0.15} ${to.x} ${to.y}`;
}

function DirectionIndicator({ direction, x, y }) {
  if (direction === 'bidirectional') {
    return <text x={x} y={y} textAnchor="middle" fill="var(--text-tertiary)" fontSize="9" fontWeight="500">&#8596;</text>;
  }
  return null;
}

export default function SystemsArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState(null);

  const activeConnections = activeNode
    ? connections.filter(c => c.from === activeNode || c.to === activeNode)
    : [];

  const activeNodeIds = activeNode
    ? new Set([activeNode, ...activeConnections.map(c => c.from === activeNode ? c.to : c.from)])
    : null;

  function handleNodeClick(nodeId) {
    setActiveNode(activeNode === nodeId ? null : nodeId);
  }

  return (
    <div className="sys-diagram">
      <svg
        viewBox="0 0 600 450"
        className="sys-diagram__svg"
        role="img"
        aria-label="CS Systems Architecture — hub and spoke diagram"
        onClick={(e) => {
          // Click on SVG background clears selection
          if (e.target.tagName === 'svg') setActiveNode(null);
        }}
      >
        {/* Connection lines — rendered first so nodes paint on top */}
        {connections.map((conn) => {
          const from = nodes.find(n => n.id === conn.from);
          const to = nodes.find(n => n.id === conn.to);
          const isActive = !activeNodeIds || (activeNodeIds.has(conn.from) && activeNodeIds.has(conn.to));
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;

          return (
            <g key={`${conn.from}-${conn.to}`}>
              <path
                d={getConnectionPath(from, to)}
                fill="none"
                stroke={isActive ? 'var(--accent)' : 'var(--border)'}
                strokeWidth={isActive && activeNode ? 2 : 1}
                strokeDasharray={conn.direction === 'bidirectional' ? 'none' : '4 3'}
                opacity={isActive ? 1 : 0.2}
                style={{ transition: 'all 0.3s ease' }}
              />
              {isActive && activeNode && (
                <DirectionIndicator direction={conn.direction} x={midX} y={midY - 6} />
              )}
            </g>
          );
        })}

        {/* Nodes — rendered second so they sit on top of lines */}
        {nodes.map((node) => {
          const colors = nodeColors[node.id];
          const isActive = !activeNodeIds || activeNodeIds.has(node.id);
          const isCurrent = activeNode === node.id;
          const w = node.isHub ? 120 : 100;
          const h = node.isHub ? 56 : 48;

          return (
            <g
              key={node.id}
              role="button"
              tabIndex={0}
              aria-label={`${node.label} — ${node.sublabel}`}
              style={{
                cursor: 'pointer',
                opacity: isActive ? 1 : 0.25,
                transition: 'opacity 0.3s ease',
                outline: 'none',
              }}
              onClick={(e) => { e.stopPropagation(); handleNodeClick(node.id); }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleNodeClick(node.id); } }}
            >
              {/* Solid background rect to mask connection lines behind the node */}
              <rect
                x={node.x - w / 2 - 1}
                y={node.y - h / 2 - 1}
                width={w + 2}
                height={h + 2}
                rx={12}
                fill="var(--bg-primary)"
              />
              {/* Visible node rect */}
              <rect
                x={node.x - w / 2}
                y={node.y - h / 2}
                width={w}
                height={h}
                rx={12}
                fill={node.isHub ? 'var(--accent)' : 'var(--bg-card)'}
                stroke={isCurrent ? colors.border : 'var(--border)'}
                strokeWidth={isCurrent ? 2 : 1}
                style={{ transition: 'all 0.3s ease' }}
              />
              <text
                x={node.x}
                y={node.y - 4}
                textAnchor="middle"
                fill={node.isHub ? '#fff' : 'var(--text-primary)'}
                fontSize={node.isHub ? 13 : 12}
                fontWeight="600"
                fontFamily="Montserrat, sans-serif"
              >
                {node.label}
              </text>
              <text
                x={node.x}
                y={node.y + 12}
                textAnchor="middle"
                fill={node.isHub ? 'rgba(255,255,255,0.7)' : 'var(--text-tertiary)'}
                fontSize="9"
                fontWeight="400"
                fontFamily="Montserrat, sans-serif"
              >
                {node.sublabel}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Detail panel */}
      {activeNode && (
        <div className="sys-diagram__detail">
          <div className="sys-diagram__detail-header">
            <span
              className="sys-diagram__detail-dot"
              style={{ background: nodeColors[activeNode]?.border }}
            />
            <h4 className="sys-diagram__detail-title">
              {nodes.find(n => n.id === activeNode)?.label}
            </h4>
          </div>
          {activeConnections.length > 0 ? (
            <div className="sys-diagram__detail-flows">
              {activeConnections.map((conn) => {
                const otherNode = conn.from === activeNode
                  ? nodes.find(n => n.id === conn.to)
                  : nodes.find(n => n.id === conn.from);
                const dirLabel = conn.direction === 'bidirectional'
                  ? 'Bidirectional'
                  : conn.direction === 'inbound' ? 'Inbound' : 'Outbound';

                return (
                  <div key={`${conn.from}-${conn.to}`} className="sys-diagram__flow">
                    <div className="sys-diagram__flow-header">
                      <span className="sys-diagram__flow-target">{otherNode.label}</span>
                      <span className="sys-diagram__flow-dir">{dirLabel}</span>
                    </div>
                    <ul className="sys-diagram__flow-list">
                      {conn.dataFlows.map((flow, i) => (
                        <li key={i}>{flow}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="sys-diagram__detail-empty">
              Click a connected node to see data flows.
            </p>
          )}
        </div>
      )}

      {!activeNode && (
        <p className="sys-diagram__hint">
          Click a node to explore data flows
        </p>
      )}

      <style>{`
        .sys-diagram {
          position: relative;
        }

        .sys-diagram__svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .sys-diagram__hint {
          text-align: center;
          font-size: 12px;
          color: var(--text-tertiary);
          margin-top: 12px;
          font-style: italic;
        }

        .sys-diagram__detail {
          margin-top: 20px;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          animation: fadeInUp 0.25s ease both;
        }

        .sys-diagram__detail-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .sys-diagram__detail-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .sys-diagram__detail-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .sys-diagram__detail-flows {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .sys-diagram__flow {
          padding: 12px 16px;
          background: var(--bg-elevated);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
        }

        .sys-diagram__flow-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .sys-diagram__flow-target {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .sys-diagram__flow-dir {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--text-tertiary);
          padding: 2px 6px;
          background: var(--bg-card);
          border-radius: 4px;
        }

        .sys-diagram__flow-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sys-diagram__flow-list li {
          font-size: 11px;
          color: var(--text-secondary);
          padding-left: 12px;
          position: relative;
        }

        .sys-diagram__flow-list li::before {
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

        .sys-diagram__detail-empty {
          font-size: 13px;
          color: var(--text-tertiary);
        }

        @media (max-width: 640px) {
          .sys-diagram__detail-flows {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
