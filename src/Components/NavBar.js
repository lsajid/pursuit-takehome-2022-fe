//react
import React from "react";
//routing
import { Link } from "react-router-dom";
//components
import CreateRestaurantModal from "./CreateRestaurantModal";
//css
import "../Styles/NavBar.css";
//image
import logoImage from "../assets/logo_transparent.png";
//material UI
import SearchIcon from "@mui/icons-material/Search";

import { IconButton } from "@mui/material";

function NavBar({ handleInput, handleSubmit, input }) {
  return (
    <nav className="navbar-container">
      <div className="info-image-box">
        <Link to="/">
          {" "}
          <img src={logoImage} alt="click to go to home page" />{" "}
        </Link>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="search-form">
          <div>
            <IconButton
              aria-label="search by restaurant name or cuisine type"
              color="primary"
            >
              <SearchIcon className="search-button" />
            </IconButton>
          </div>
          <input
            className="search-input"
            placeholder="Cuisine, food, drinks, etc "
            type="text"
            onInput={handleInput}
            value={input}
          />
        </form>
      </div>

      <div className="menu-box">
        <CreateRestaurantModal />
      </div>
    </nav>
  );
}

export default NavBar;
