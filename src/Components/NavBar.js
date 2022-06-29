import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../Styles/NavBar.css";
import logoImage from "../assets/logo_transparent.png";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import {Button} from '@mui/material';
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import axios from "axios";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 650,
    bgcolor: "ghostwhite",
    border: "2px solid #000",
    boxShadow: 24,
    p: 9,
};

  const style2 = {
    margin: "1px",
    padding: "2px",
    width: 500,
    height: 590
  }

function NavBar({handleInput, handleSubmit, input}) {
    const [open, setOpen] = useState(false);
    const [ restaurant, setRestaurant ] = useState({
        name:'',
        description:'',
        phoneNumber: '', 
        openingTime: '', 
        closingTime: '', 
        location: '', 
        cuisine: '', 
        price: '', 
        diningRestriction: ''  //diningRestriction must be in the form of [Takeout Only OR Delivery Only]
      });

    const url = process.env.REACT_APP_API_URL;
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let navigate = useNavigate();

    const addRestaurant = (newRestaurant) => {
        console.log(newRestaurant);
        axios.post(`${url}/api/restaurants`, newRestaurant)
            .then((res) => navigate("/"))
            .catch((err) => console.log(err))
    }

    const handleTextChange = (event) => {
		setRestaurant({ ...restaurant, [event.target.id]: event.target.value });
	};

    const handleSubmitForm = (event) => {
        event.preventDefault();
        addRestaurant(restaurant);
        setRestaurant({
            name:'',
            description:'',
            phoneNumber: '', 
            openingTime: '', 
            closingTime: '', 
            location: '', 
            cuisine: '', 
            price: '', 
            diningRestriction: ''
        });
        navigate("/");
        handleClose();
    }

  return (
    <nav className='navbar-container'>

            <div className='info-image-box'>
                <Link to="/"> <img src={logoImage} alt="click to go to home page"/> </Link>
            </div>
        
            <div className='form-container'>
                <form onSubmit={handleSubmit} className='search-form'>
                    <div>
                        <IconButton aria-label="search by restaurant name or cuisine type" color="primary">
                            <SearchIcon className="search-button" />
                        </IconButton>
                    </div>
                    <input
                        className='search-input'
                        placeholder='Cuisine, food, drinks, etc '
                        type="text"
                        onInput={handleInput}
                        value={input}
                    />
                </form>
            </div>

            <div className='menu-box'>
                <Button className="menu-button" onClick={handleOpen}>
                    CREATE RESTAURANT
                </Button>
                <Link to={"/reservations"}>
                    <Button className="menu-button">
                        VIEW ALL RESERVATIONS
                    </Button>
                </Link>

            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='modal-box' sx={style}>
                    <Typography id="modal-title" variant="h5" component="h2">
                            Add Restaurant
                    </Typography>
                    <hr/>
                    <div className="form-modal-box">
                        
                        <Box type="form" sx={style2} className="form-modal-box" onSubmit={handleSubmitForm}>
                            <FormControl>
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <OutlinedInput
                                    id="name"
                                    type= 'text'
                                    value={restaurant.name}
                                    onChange={handleTextChange}
                                    label="name"
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="description">Description</InputLabel>
                                <OutlinedInput
                                    id="description"
                                    type= 'text'
                                    value={restaurant.description}
                                    onChange={handleTextChange}
                                    label="description"
                                />
                            </FormControl>
                           
                            <FormControl>
                                <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                                <OutlinedInput
                                    id="phoneNumber"
                                    type= 'text'
                                    value={restaurant.phoneNumber}
                                    onChange={handleTextChange}
                                    label="phoneNumber"
                                />
                            </FormControl>

                            <FormControl>
                                <InputLabel htmlFor="openingTime">Opening Time</InputLabel>
                                <OutlinedInput
                                    id="openingTime"
                                    type= 'text'
                                    value={restaurant.openingTime}
                                    onChange={handleTextChange}
                                    label="openingTime"
                                />
                            </FormControl>
                                
                            <FormControl>
                                <InputLabel htmlFor="closingTime">Closing Time</InputLabel>
                                <OutlinedInput
                                    id="closingTime"
                                    type= 'text'
                                    value={restaurant.closingTime}
                                    onChange={handleTextChange}
                                    label="closingTime"
                                />
                            </FormControl>

                            <FormControl>
                                <InputLabel htmlFor="location">Location</InputLabel>
                                <OutlinedInput
                                    id="location"
                                    type= 'text'
                                    value={restaurant.location}
                                    onChange={handleTextChange}
                                    label="location"
                                />
                            </FormControl>
                            
                            <FormControl>
                                <InputLabel htmlFor="cuisine">Cuisine Type</InputLabel>
                                <OutlinedInput
                                    id="cuisine"
                                    type= 'text'
                                    value={restaurant.cuisine}
                                    onChange={handleTextChange}
                                    label="cuisine"
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="price">Price Range</InputLabel>
                                <OutlinedInput
                                    id="price"
                                    type= 'text'
                                    value={restaurant.price}
                                    onChange={handleTextChange}
                                    label="price"
                                />
                            </FormControl>
                            
                            <FormControl>
                                <InputLabel htmlFor="diningRestriction">Dining Restrictions</InputLabel>
                                <OutlinedInput
                                    id="diningRestriction"
                                    type= 'text'
                                    value={restaurant.diningRestriction}
                                    onChange={handleTextChange}
                                    label="diningRestriction"
                                />
                            </FormControl>
                            
                            
                        </Box>
                    </div>
                    <Button variant="outlined" onClick={handleSubmitForm}type='submit'>Submit</Button>
                </Box>
            </Modal>
 
    </nav>
  )
}

export default NavBar