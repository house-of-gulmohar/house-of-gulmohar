import { RouteObject } from 'react-router-dom';
import HomePage from '../views/pages/HomePage';
import NoteFoundPage from '../views/pages/NoteFoundPage';
import PagesRoutes from './pagesRoutes';

const AllPages = () => {
  const allRoutes: RouteObject[] = [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '*',
      element: <NoteFoundPage />,
    },
    ...PagesRoutes(),
  ];
  return allRoutes;
};

export default AllPages;
