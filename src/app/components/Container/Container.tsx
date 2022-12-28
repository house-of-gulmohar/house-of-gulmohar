import React from 'react';

interface IContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children }) => {
  return (
    <div className="container" style={{ padding: '20px 3%' }}>
      {children}
    </div>
  );
};

export default Container;
