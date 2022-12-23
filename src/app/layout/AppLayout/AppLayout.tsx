import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './AppLayout.scss';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  useEffect(() => {}, []);
  return (
    <div className="layout">
      <Navbar />
      <Sidebar />
      <div className="layout__children">{children}</div>
    </div>
  );
};

export default AppLayout;
