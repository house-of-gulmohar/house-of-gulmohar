import React, { useState } from 'react';
import './InfoContainer.scss';

interface IInfoContainerProps {
  main: React.ReactNode;
  info: React.ReactNode;
}

const InfoContainer: React.FC<IInfoContainerProps> = ({ main, info }) => {
  const [isInfoActive, setIsInfoActive] = useState(false);

  return (
    <div className="infoContainer">
      <div className="infoContainer__main">{main}</div>
      {/* TODO: Create info page */}
      <div className={`infoContainer__info ${isInfoActive && 'active'}`}>
        {info}
      </div>
    </div>
  );
};

export default InfoContainer;
