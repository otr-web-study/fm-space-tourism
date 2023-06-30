import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import DestinationPage from 'pages/DestinationPage';
import CrewPage from 'pages/CrewPage';
import TechnologyPage from 'pages/TechnologyPage';
import NotFoundPage from 'pages/NotFoundPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route path="/destination/:slug" element={<DestinationPage />} />
      <Route path="/crew" element={<CrewPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
