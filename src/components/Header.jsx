import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../context/StateProvider';

import '../styles/Header.css';
import { auth } from '../firebase/firebase';

function Header() {
  const [{ user, basket }, dispatch] = useStateValue();

  const login = () => {
    auth.signOut();
  };

  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 1 links */}
      <div className="header__nav">
        <Link to={!user && '/login'} className="header__link">
          <div onClick={login} className="header__options">
            <span className="header__optionLineOne">
              Hello {user ? user.email : 'Guest'}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        {/* 3 links */}
        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3 links */}
        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      {/* basket icon with the number */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          {/* Icon */}
          <ShoppingBasketIcon />

          {/* Number of items */}
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
