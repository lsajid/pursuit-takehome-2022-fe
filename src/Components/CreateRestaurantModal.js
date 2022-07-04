import React, {useState} from 'react';
import axios from "axios";
import {styled } from '@mui/material/styles';
import "../Styles/CreateRestaurantModal.css";
import { Link, useNavigate } from "react-router-dom";
import {  Button, Modal, Typography, Box, OutlinedInput, InputLabel, FormControl, TextField } from '@mui/material';

function CreateRestaurantModal( ) {
  const [open, setOpen] = useState(false);
  const [ nameError, setNameError ] = useState(false);
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const url = process.env.REACT_APP_API_URL;

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
    setNameError(false);
    
    if( restaurant.name === ' ') {
      setNameError(true)
    }
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 630,
    bgcolor: "ghostwhite",
    border: "2px solid #000",
    boxShadow: 24,
    p: 9,
  };
  
  const style2 = {
    margin: "1px",
    padding: "2px",
    width: 500,
    height: 590,
    display: "grid",
    gridTemplateColumns: { sm: '1fr 1fr'},
    gap: 2,
  }

  const navOptStyle = {
    margin: "3px",
    border: 0,
    borderRadius: 3,
    minHeight: "28px",
    boxShadow: '0 3px 4px 2px #40858C',
    color: '#1A3538',
    fontsize: "small", 
    width: 200,
    padding: '0 30px',
  }
  
  const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '2px', // override inline-style
    },
  });

  return (
    <div>
      <div className='navOpt-container'>
        <Button sx={navOptStyle} variant="outlined" className="menu-button" onClick={handleOpen}>
          <Typography gutterBottom variant="subtitle1" component="div">
            CREATE RESTAURANT
          </Typography>
        </Button>

      
        <Link to={"/reservations"}>
          <Button sx={navOptStyle} variant="outlined" className="menu-button">
            <Typography gutterBottom variant="subtitle1" component="div">
              ALL RESERVATIONS
            </Typography>
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
      <div className='modal-title'>
        <Typography  gutterBottom variant="h6" component="div" >
              Create New Restaurant
          </Typography>
          <hr className='styledHr'/>
      </div>

        <div className="form-modal-box">
            
            <Box component="form" sx={style2} className="form-modal-box" onSubmit={handleSubmitForm}>
                <FormControl>
                    <ValidationTextField
                        id="name"
                        defaultValue="Success"
                        variant="outlined"
                        type= 'text'
                        value={restaurant.name}
                        onChange={handleTextChange}
                        label="Name"
                        error={nameError}
                    />
                </FormControl>

                <FormControl>
                    <ValidationTextField
                        id="description"
                        type= 'text'
                        
                        value={restaurant.description}
                        onChange={handleTextChange}
                        label="Description"
                    />
                </FormControl>
               
                <FormControl>
                    <TextField
                        id="phoneNumber"
                        type= 'text'
                        value={restaurant.phoneNumber}
                        onChange={handleTextChange}
                        label="Phone Number"
                    />
                </FormControl>

                <FormControl>
                    <TextField
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
</Modal></div>
  )
}

export default CreateRestaurantModal