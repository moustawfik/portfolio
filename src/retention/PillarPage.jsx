import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { pillars } from './data/pillars';
import PillarContent from './components/PillarContent';

const contentModules = {
  'revenue-retention': () => import('./data/pillar-content/revenue-retention'),
  'proactive-reactive': () => import('./data/pillar-content/proactive-reactive'),
  'role-clarity': () => import('./data/pillar-content/role-clarity'),
  'systems-architecture': () => import('./data/pillar-content/systems-architecture'),
  'health-scoring': () => import('./data/pillar-content/health-scoring'),
  'renewal-forecasting': () => import('./data/pillar-content/renewal-forecasting'),
  'qbr-engagement': () => import('./data/pillar-content/qbr-engagement'),
  'cs-tech-stack': () => import('./data/pillar-content/cs-tech-stack'),
  'compensation-design': () => import('./data/pillar-content/compensation-design'),
};

const diagramModules = {
  'systems-architecture': () => import('./diagrams/SystemsArchitectureDiagram'),
  'health-scoring': () => import('./diagrams/HealthScoreDiagram'),
  'renewal-forecasting': () => import('./diagrams/RenewalForecastDiagram'),
};

function usePillarData(pillarSlug) {
  const [state, setState] = useState({ content: null, DiagramComponent: null, slug: null });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      let loadedContent = null;
      let LoadedDiagram = null;

      const loads = [];

      if (contentModules[pillarSlug]) {
        loads.push(
          contentModules[pillarSlug]()
            .then(mod => { loadedContent = mod.default; })
            .catch(() => {})
        );
      }

      if (diagramModules[pillarSlug]) {
        loads.push(
          diagramModules[pillarSlug]()
            .then(mod => { LoadedDiagram = mod.default; })
            .catch(() => {})
        );
      }

      await Promise.all(loads);
      if (!cancelled) {
        setState({ content: loadedContent, DiagramComponent: LoadedDiagram, slug: pillarSlug });
      }
    }

    load();
    return () => { cancelled = true; };
  }, [pillarSlug]);

  // Derive loading from slug mismatch — no synchronous setState needed
  const loading = state.slug !== pillarSlug;

  return { content: loading ? null : state.content, DiagramComponent: loading ? null : state.DiagramComponent, loading };
}

export default function PillarPage() {
  const { pillarSlug } = useParams();
  const pillar = pillars.find(p => p.slug === pillarSlug);
  const { content, DiagramComponent, loading } = usePillarData(pillarSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pillarSlug]);

  if (!pillar) return <Navigate to="/retention-architecture" replace />;

  if (loading) {
    return (
      <div className="pillar-loading">
        <div className="pillar-loading__spinner" />
        <style>{`
          .pillar-loading {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 60vh;
          }
          .pillar-loading__spinner {
            width: 24px;
            height: 24px;
            border: 2px solid var(--border);
            border-top-color: var(--accent);
            border-radius: 50%;
            animation: spin 0.6s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <PillarContent
      pillar={pillar}
      content={content}
      DiagramComponent={DiagramComponent}
    />
  );
}
