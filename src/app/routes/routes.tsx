import { RouteObject } from 'react-router-dom';
import AppLayout from '../layout/AppLayout/AppLayout';
import HomePage from '../pages/HomePage';
import NoteFoundPage from '../pages/NoteFoundPage';

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
  ];
  return allRoutes;
};

export default AllPages;
