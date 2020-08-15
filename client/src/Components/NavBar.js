import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "../css/TestNav.css";
import { useStateValue } from "../contexts/StateProvider";

function NavBar() {
  const [{ cart }] = useStateValue();

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to="/">
          <span className="nav__logoText">Gravity LEDs</span>
          {/* <img src="https://raw.githubusercontent.com/kevinbuhlerr/LED-LIGHTS/master/client/src/ledlogo.png" alt="." /> */}
        </Link>
      </div>

      <div className="nav__search">
        <SearchIcon className="nav__searchIcon" />
        <input
          type="text"
          className="nav__searchInput"
          placeholder="Search..."
        />
      </div>

      <div className="nav__links">
        <Link to="/" className="nav__link">
          <div className="nav__options">
            <span className="nav__optionLineTwo big">Home</span>
          </div>
        </Link>

        <Link to="/shop" className="nav__link">
          <div className="nav__options">
            <span className="nav__optionLineTwo big">Shop</span>
          </div>
        </Link>

        <Link to="/about" className="nav__link">
          <div className="nav__options">
            <span className="nav__optionLineOne big">About Us</span>
          </div>
        </Link>

        <Link to="/contact" className="nav__link">
          <div className="nav__options">
            <span className="nav__optionLineOne big">Contact</span>
          </div>
        </Link>
        <Link to="/users/login" className="nav__link">
          <div className="nav__options">
            <span className="nav__optionLineOne big">Login</span>
          </div>
        </Link>

        <div className="nav__icons">
          <Link to="/checkout">
            <div className="nav__shoppingBasketIcon big">
              <ShoppingBasketIcon />
              <span className="nav__cartLength">{cart?.length}</span>
            </div>
          </Link>

          <Link to="/account">
            <div className="nav__accountBoxIcon big">
              <AccountBoxIcon />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;