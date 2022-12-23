import React from 'react';
import './Sidebar.scss';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillBagFill, BsLayers, BsCart3 } from 'react-icons/bs';
import { useSettings } from '../../hooks';

const Sidebar = () => {
  const { isSidebarOpen } = useSettings();
  return (
    <div className={`sidebar ${isSidebarOpen && 'active'}`}>
      <div className="sidebar__items">
        <ul>
          <li>
            <BsFillBagFill />
            <p>Wishlist</p>
          </li>
          <li>
            <BsLayers />
            <p>Categories</p>
          </li>
          <li>
            <BsCart3 />
            <p>Cart</p>
          </li>
          <li>
            <AiOutlineUser />
            <p>User</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
