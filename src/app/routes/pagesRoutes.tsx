import React from 'react';
import { RouteObject } from 'react-router-dom';
import IconsPage from '../views/pages/IconsPage';

const PagesRoutes = () => {
  const pagesRoutes: RouteObject[] = [
    {
      path: 'icons',
      element: <IconsPage />,
    },
  ];
  return pagesRoutes;
};

export default PagesRoutes;
