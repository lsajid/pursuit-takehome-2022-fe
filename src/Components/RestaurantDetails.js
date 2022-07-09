import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate } from "react-router-dom";
import "../Styles/RestaurantDetails.css";
import restaurantImage1 from "../assets/restaurant-inside-seating.jpeg";
import {Button, Box} from '@mui/material';
import { Modal, Typography, Grid } from '@mui/material';
import Reservation from './Reservation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import NewReservation from './NewReservation';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from "axios";
import formatTime from '../util/formatTime';
import formatPhoneNumber from '../util/formatPhoneNumber';


function RestaurantDetails({restaurantReservations}) {
  const [open, setOpen] = useState(false);
  
  const [newReservation, setNewReservation ] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    time: "",
    numGuests: ""
  });

  const {id} = useParams();
  const navigate = useNavigate();

  const [ restaurant, setRestaurant ] = useState({
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    height: "auto",
    bgcolor: "ghostwhite",
    border: "2px solid #000",
    boxShadow: 24,
    p: 9,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const url = process.env.REACT_APP_API_URL;


  useEffect(() => {
    fetch(`${url}/api/restaurants/${id}`)
      .then((res) => {
        return res.json();
      }).then((data) => {
        setRestaurant(data);
      }).catch((err) => console.log(err));
  }, [url, id]);



  const handleDelete = () => {
      axios.delete(`${url}/api/restaurants/${id}`)
        .then(res => navigate("/"))
        .catch(error => console.log(error))
  };

  const reservation = restaurantReservations.map((reservation, index) => {
    return (
      <div><Reservation key={reservation.firstName + index} reservation={reservation}/></div>
    )
  })

  const handleTextChange = (event) => {
    setNewReservation({...newReservation, [event.target.id] : event.target.value, restaurantId: id});
  }

  const handleGuests = (event) => {
    setNewReservation({...newReservation, numGuests: event.target.value})
}

  const handleSubmitForm = (event) => {
    event.preventDefault()
    addNewReservation(newReservation);
    setNewReservation({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      time: "",
      numGuests: ""
    })
    navigate("/")
  }

  const addNewReservation = (newReservation) => {
    axios.post(`${url}/api/reservations`, newReservation)
    .then(res => navigate(`/restaurant/${id}`))
    .catch(error => console.log(error))
  }

  const buttonStyle = {
    margin:3,
    position: "relative",
    paddingLeft: 10,
    paddingRight: 10,
    width: "34px",
    color: "ghostwhite",
    background:
      "linear-gradient(to right, #aea0d5, #eaafc8)",
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      boxShadow: "0 0 10px 0 #f5005780",
      animation: "mui-ripple-pulsate 1s infinite",
      zIndex: -1
  }
}

  return (
    <div className='all-details-container'>

      <div className='buttons-container'>
        <Link to = {"/"}><Button sx={buttonStyle}>BACK</Button></Link>
      </div>
      


      <div className='info-container'>

        <div className='image-container'>
            <img src={restaurantImage1} alt="aesthetic view of restaurant seating"/> 
        </div>

        <div className='info-container-1'>
          <Typography gutterBottom variant="h4" >
            {restaurant.name}
          </Typography>

          <hr/>

          <div className="info-bar">
            <Grid container spacing={7}>
              <Grid item xs={2}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    <div>
                      <RestaurantOutlinedIcon/>
                      <span>
                        {restaurant.cuisine}
                      </span>
                    </div>
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  <div>
                    <LocationOnIcon/> 
                    <span>
                      {restaurant.location}
                    </span>
                  </div>
                </Typography>
              </Grid>
              <Grid item xs={1}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {restaurant.price}
              </Typography>
              </Grid>
            </Grid>
          </div>

          <div className='info-details'>
            <Grid container wrap="nowrap" spacing={0}>
              <Grid item xs zeroMinWidth>
                <Typography>
                {restaurant.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid container wrap>
              <Grid item xs zeroMinWidth>
                <Typography>
                  <span><StorefrontIcon/></span>
                  {restaurant.diningRestriction} 
                </Typography>
              </Grid>
            </Grid>
            <Grid container wrap="nowrap" spacing={3}>
              <Grid item xs zeroMinWidth>
                <Typography>
                  <span><LocalPhoneIcon/></span>
                   {formatPhoneNumber(restaurant.phoneNumber)}
                </Typography>
              </Grid>
            </Grid>
            <Grid container wrap="nowrap" spacing={4}>
              <Grid item xs zeroMinWidth>
                <Typography>
                  <span><AccessTimeIcon/></span>
                  {formatTime(restaurant.openingTime)} to {formatTime(restaurant.closingTime)}
                </Typography>
              </Grid>
            </Grid>
          </div>

          <div className='info-buttons'>
            <Grid container spacing={7}>
              <Grid item xs={4}>
                <Button sx={buttonStyle} onClick={handleOpen}>VIEW RESERVATIONS</Button>
              </Grid>
              <Grid item xs={4}>
                <Button sx={buttonStyle} onClick={handleDelete}>DELETE RESTAURANT</Button>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className='info-container-2-form'>
          <NewReservation handleGuests={handleGuests} newReservation={newReservation} handleTextChange={handleTextChange}  handleSubmitForm={handleSubmitForm}/>
        </div>
      </div>
    

      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Reservations
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {!reservation.length < 1 ? (
              <>
              {reservation}
              </>
            ) : (
              <>
                <Typography>
                  There are no active reservations for this restaurant. Please make a reservation.
                </Typography>
              </>
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default RestaurantDetails