/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { matchRoutes, useLocation } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import AllPages from '../../routes/routes';
import Navbar from '../Navbar/Navbar';
import './AppLayout.scss';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__children">{children}</div>
    </div>
  );
};

export default AppLayout;
