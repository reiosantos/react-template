import React from 'react';
import Layout from './shared/containers/layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './shared/components/errors/404';
import App from './pages/App';

export const AppRoutes: React.FC<any> = (props: any) => (
  <Layout>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </Layout>
);
