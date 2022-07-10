import React, { useState } from "react";
//axios
import axios from "axios";
//css
import "../Styles/CreateRestaurantModal.css";
//routing
import { Link, useNavigate } from "react-router-dom";
//material UI
import { Button, Modal, Typography, Box, FormControl, TextField, MenuItem } from "@mui/material";

function CreateRestaurantModal() {
  const [open, setOpen] = useState(false);
  const [restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    phoneNumber: "",
    openingTime: "00:00:00",
    closingTime: "00:00:00",
    location: "",
    cuisine: "",
    price: "",
    diningRestriction: "", //diningRestriction must be in the form of [Takeout Only OR Delivery Only]
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const url = process.env.REACT_APP_API_URL;

  const formatPhone = (value, previousValue) => {
    if (!value) return value; //return nothing if no value

    const currentValue = value.replace(/[^\d]/g, "");
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
      if (cvLength < 4) return currentValue;
      if (cvLength < 7)
        return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
        3,
        6
      )}-${currentValue.slice(6, 10)}`;
    }
  };

  const handlePhone = (event) => {
    setRestaurant((prevState) => ({
      ...restaurant,
      [event.target.id]: formatPhone(event.target.value, prevState.phoneNumber),
    }));
  };

  const formattedRestaurant = (newRestaurant) => {
    const value = formatPhoneLengthTo10Char(newRestaurant.phoneNumber);
    setRestaurant({ ...newRestaurant, phoneNumber: value });
  };

  const addRestaurant = (newRestaurant) => {
    console.log(newRestaurant, "New restaurant to add");
    axios
      .post(`${url}/api/restaurants`, newRestaurant)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  const handleTextChange = (event) => {
    setRestaurant({ ...restaurant, [event.target.id]: event.target.value });
  };

  const handleTime = (event) => {
    setRestaurant({
      ...restaurant,
      [event.target.id]: event.target.value + ":00",
    });
  };

  const handleLocation = (event) => {
    setRestaurant({ ...restaurant, location: event.target.value });
  };

  const handlePrice = (event) => {
    setRestaurant({ ...restaurant, price: event.target.value });
  };

  const handleDiningRestriction = (event) => {
    setRestaurant({ ...restaurant, diningRestriction: event.target.value });
  };

  const formatPhoneLengthTo10Char = (phoneNumberChar) => {
    console.log(phoneNumberChar);
    const regex = /[^0-9]/g;
    let newStr = phoneNumberChar.replace(regex, "");
    return newStr;
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // formattedRestaurant(restaurant);
    addRestaurant(restaurant);
    setRestaurant({
      name: "",
      description: "",
      phoneNumber: "",
      openingTime: "00:00:00",
      closingTime: "00:00:00",
      location: "",
      cuisine: "",
      price: "",
      diningRestriction: "",
    });
    navigate("/");
    handleClose();
  };

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
    gridTemplateColumns: { sm: "1fr 1fr" },
    gap: 2,
  };

  const navOptStyle = {
    margin: "3px",
    border: 0,
    borderRadius: 3,
    minHeight: "28px",
    boxShadow: "0 3px 4px 2px #40858C",
    color: "#1A3538",
    fontsize: "small",
    width: 200,
    padding: "0 30px",
  };

  const buttonStyle = {
    height: "56px",
  };

  return (
    <div>
      <div className="navOpt-container">
        <Button
          sx={navOptStyle}
          variant="outlined"
          className="menu-button"
          onClick={handleOpen}
        >
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
        aria-labelledby="Enter information to create your restaurant"
      >
        <Box className="modal-box" sx={style}>
          <div className="modal-title">
            <Typography gutterBottom variant="h6" component="div">
              Create New Restaurant
            </Typography>
            <hr className="styledHr" />
          </div>

          <div className="form-modal-box">
            <Box
              component="form"
              sx={style2}
              className="form-modal-box"
              onSubmit={handleSubmitForm}
            >
              <FormControl>
                <TextField
                  id="name"
                  required={true}
                  variant="outlined"
                  type="text"
                  value={restaurant.name}
                  onInput={handleTextChange}
                  label="Name"
                />
              </FormControl>

              <FormControl>
                <TextField
                  required={true}
                  id="description"
                  type="text"
                  value={restaurant.description}
                  onChange={handleTextChange}
                  label="Description"
                />
              </FormControl>

              <FormControl>
                <TextField
                  id="phoneNumber"
                  required={true}
                  pattern="[0-9]{10}"
                  value={restaurant.phoneNumber}
                  onChange={handleTextChange}
                  label="Phone Number"
                  placeholder="(xxx) xxx-xxxx"
                />
              </FormControl>

              <FormControl>
                <TextField
                  id="openingTime"
                  type="time"
                  required={true}
                  value={restaurant.openingTime}
                  onChange={handleTime}
                  label="Opening Time"
                />
              </FormControl>

              <FormControl>
                <TextField
                  id="closingTime"
                  required={true}
                  type="time"
                  value={restaurant.closingTime}
                  onChange={handleTime}
                  label="Closing Time"
                />
              </FormControl>

              <FormControl>
                <TextField
                  required={true}
                  id="location"
                  onChange={handleLocation}
                  select
                  label="Location"
                  value={restaurant.location}
                >
                  <MenuItem id="location" value=""></MenuItem>
                  <MenuItem id="location" value="New York City">
                    New York City
                  </MenuItem>
                  <MenuItem id="location" value="Queens">
                    Queens
                  </MenuItem>
                  <MenuItem id="location" value="Brooklyn">
                    Brooklyn
                  </MenuItem>
                  <MenuItem id="location" value="Bronx">
                    Bronx
                  </MenuItem>
                </TextField>
              </FormControl>

              <FormControl>
                <TextField
                  id="cuisine"
                  type="text"
                  required={true}
                  value={restaurant.cuisine}
                  onChange={handleTextChange}
                  label="Cuisine"
                />
              </FormControl>

              <FormControl>
                <TextField
                  required={true}
                  id="price"
                  onChange={handlePrice}
                  select
                  label="Price Range"
                  value={restaurant.price}
                >
                  <MenuItem id="price" value=""></MenuItem>
                  <MenuItem id="price" value="$">
                    $
                  </MenuItem>
                  <MenuItem id="price" value="$$">
                    $$
                  </MenuItem>
                  <MenuItem id="price" value="$$$">
                    $$$
                  </MenuItem>
                  <MenuItem id="price" value="$$$$">
                    $$$$
                  </MenuItem>
                </TextField>
              </FormControl>

              <FormControl>
                <TextField
                  required={true}
                  id="diningRestriction"
                  onChange={handleDiningRestriction}
                  value={restaurant.diningRestriction}
                  select
                  label="Dining Restrictions"
                >
                  <MenuItem id="diningRestriction"></MenuItem>
                  <MenuItem id="diningRestriction" value="Takeout Only">
                    Takeout Only
                  </MenuItem>
                  <MenuItem id="diningRestriction" value="Delivery Only">
                    Delivery Only
                  </MenuItem>
                </TextField>
              </FormControl>
              <Button
                sx={buttonStyle}
                variant="outlined"
                onClick={handleSubmitForm}
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default CreateRestaurantModal;
