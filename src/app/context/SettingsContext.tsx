import React, { createContext, useMemo, useState } from 'react';

export interface ISettingsContext {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

interface ISettingsProviderProps {
  children: React.ReactNode;
}

export const SettingsContext = createContext<ISettingsContext | null>(null);

export const SettingsProvider: React.FC<ISettingsProviderProps> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const values = useMemo(() => {
    return {
      isSidebarOpen,
      openSidebar,
      closeSidebar,
    };
  }, [isSidebarOpen]);
  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
};
