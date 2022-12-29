import React from 'react';
import { RouteObject } from 'react-router-dom';
import CategoryPage from '../views/pages/CategoryPage';
import IconsPage from '../views/pages/IconsPage';
import ProductPage from '../views/pages/ProductPage';

const PagesRoutes = () => {
  const pagesRoutes: RouteObject[] = [
    {
      path: 'icons',
      element: <IconsPage />,
    },
    {
      path: 'categories/:categoryName',
      element: <CategoryPage />,
    },
    {
      path: 'products/:productId',
      element: <ProductPage />,
    },
  ];
  return pagesRoutes;
};

export default PagesRoutes;
