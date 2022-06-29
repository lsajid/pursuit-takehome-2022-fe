import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate } from "react-router-dom";
import "../Styles/RestaurantDetails.css";
import restaurantImage1 from "../assets/restaurant-singleView-image.jpeg";
import restaurantImage2 from "../assets/restaurant-singleView-image2.jpeg";
import restaurantImage3 from "../assets/restaurant-singleView-image3.jpeg";
import {Button, Box} from '@mui/material';
import { Modal, Typography } from '@mui/material';
import axios from "axios";
import Reservation from './Reservation';



function RestaurantDetails({restaurantReservations}) {
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
    diningRestriction: ''
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "auto",
    bgcolor: "ghostwhite",
    border: "2px solid #000",
    boxShadow: 24,
    p: 9,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const {id} = useParams();
  const url = process.env.REACT_APP_API_URL;

  const imageArray = [ restaurantImage1, restaurantImage2, restaurantImage3];

  const randomImage = imageArray[Math.floor(Math.random()*(imageArray.length))];

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

  const reservation = restaurantReservations.map((reservation) => {
    return (
      <div><Reservation reservation={reservation}/></div>
    )
  })

  console.log(reservation, "trigger")

  return (
    <div>
      <div className='buttons-container'>
        <Link to = {"/"}><Button>BACK</Button></Link>
      </div>
      <img src={randomImage} alt="aesthetic view of outdoor restaurant"/> 
      <h1>{restaurant.name}</h1>
      <div className='prev-filters'>
        <div>
          {restaurant.cuisine}
        </div>
        
        <div>
          {restaurant.location}
        </div>

        <div>
          {restaurant.price}
        </div>

        <div>
          Dining Restrictions: {restaurant.diningRestriction} 
        </div>
      </div>

      <div>
        <p>{restaurant.description}</p>
        <div> PhoneNumber: {restaurant.phoneNumber}</div>
        <div> Open from: {restaurant.openingTime} to {restaurant.closingTime} </div>
      </div>
      
      <div className='createReservationForm'>
        <h4>Make a Reservation</h4>
      </div>


      
      <div>
      {/* <Button onClick={handleOpen}>VIEW RESERVATIONS</Button> */}
        <Button onClick={handleDelete}>DELETE</Button>
      </div>

      <Button onClick={handleOpen}>VIEW RESERVATIONS</Button>
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
              no reservation here
              </>
            )}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default RestaurantDetails