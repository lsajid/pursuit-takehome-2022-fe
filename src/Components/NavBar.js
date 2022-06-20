import React from 'react';
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

function NavBar() {

  return (
    <nav>
        <div className='navbar-container'>

            <div className='navbar-home-info'>
                <Link to="/"> <HomeIcon/></Link>
                <div className="navbar-text">Reservation-App</div>
            </div>
            

            <form className='navbar-input'>
                <button className='navbar-inputButton'><SearchIcon/></button>
                <input
                    placeholder='...'
                    type="text"
                    onInput={""}
                    value={""}
                />
            </form>

            <button><Link to="/">Log in</Link></button>
        </div>
    </nav>
  )
}

export default NavBar