import { Routes, Route, useLocation } from 'react-router-dom';
import RetentionNav from './RetentionNav';
import RetentionSidebar from './RetentionSidebar';
import RetentionLanding from './RetentionLanding';
import PillarPage from './PillarPage';

export default function RetentionApp() {
  const location = useLocation();
  const isLanding = location.pathname === '/retention-architecture' || location.pathname === '/retention-architecture/';

  return (
    <>
      <RetentionNav />
      <RetentionSidebar />
      <div className={`ra__main ${!isLanding ? 'ra__main--pillar' : ''}`}>
        <Routes>
          <Route index element={<RetentionLanding />} />
          <Route path=":pillarSlug" element={<PillarPage />} />
        </Routes>
      </div>

      <style>{`
        .ra__main {
          margin-top: 56px;
          margin-left: 220px;
          min-height: calc(100vh - 56px);
        }

        @media (max-width: 900px) {
          .ra__main {
            margin-left: 0;
          }

          .ra__main--pillar {
            margin-top: 100px;
          }
        }
      `}</style>
    </>
  );
}
