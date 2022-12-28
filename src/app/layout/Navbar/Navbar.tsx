import './Navbar.scss';
import { BsFillBagFill, BsCart3, BsLayers } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { HiMenuAlt3 } from 'react-icons/hi';
import { GiSettingsKnobs } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSettings } from '../../hooks';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const { isSidebarOpen, openSidebar, closeSidebar } = useSettings();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <Link className="navbar__logo" to="/">
          <img src="/assets/images/house-of-gulmohar-logo.png" alt="" />
          <h1>Logo</h1>
        </Link>
        <div className="navbar__search">
          <input
            type="text"
            placeholder="search"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="navbar__items">
          <ul>
            <li>
              <GiSettingsKnobs />
            </li>
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
        <div
          className="navbar__hamburger"
          onClick={isSidebarOpen ? closeSidebar : openSidebar}
        >
          <HiMenuAlt3 />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
