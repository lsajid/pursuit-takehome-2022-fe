import React from 'react';
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import logoImage from "../assets/logo_transparent.png"
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import {Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {

  return (
    <nav className='navbar-container'>

            <div className='info-image-box'>
                <Link to="/"> <img src={logoImage} alt="link to home page"/> </Link>
            </div>
        
            <div className='form-container'>
                <form className='search-form'>
                    <div>
                        <IconButton aria-label="search by restaurant name or cuisine type" color="primary">
                            <SearchIcon className="search-button" />
                        </IconButton>
                    </div>
                    <input
                        className='search-input'
                        placeholder='Cuisine, food, drinks, etc '
                        type="text"
                        onInput={""}
                        value={""}
                    />
                </form>
            </div>

            <div className='login-box'>
                <Button className="login-button" aria-label='view menu'>
                    <MenuIcon/>
                </Button>
            </div>
    </nav>
  )
}

export default NavBar