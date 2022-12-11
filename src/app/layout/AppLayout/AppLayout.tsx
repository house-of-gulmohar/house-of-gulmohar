import React from 'react';
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
