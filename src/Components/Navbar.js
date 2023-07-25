import logo from "../assets/logo.png";
import "./css/navbar.css";

import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav_searchbar">
        <input
          type="text"
          placeholder="Search"
          className="search_input_feild"
        />
        <FiSearch className="nav_search_button" />
      </div>
      <h1 className="signin">Sign in</h1>
    </nav>
  );
}

export default Navbar;
