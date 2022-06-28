import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate } from "react-router-dom";
import "../Styles/RestaurantDetails.css";
import restaurantImage1 from "../assets/restaurant-singleView-image.jpeg";
import restaurantImage2 from "../assets/restaurant-singleView-image2.jpeg";
import restaurantImage3 from "../assets/restaurant-singleView-image3.jpeg";
import {Button} from '@mui/material';
import axios from "axios";

function RestaurantDetails() {
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

  const navigate = useNavigate();
  const {id} = useParams();
  const url = process.env.REACT_APP_API_URL;

  const imageArray = [ restaurantImage1, restaurantImage2, restaurantImage3];

  const randomImage = imageArray[Math.floor(Math.random()*(imageArray.length))];
  console.log(randomImage)

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

  return (
    <div>
      <div className='buttons-container'>
        <Link to = {"/"}><Button>BACK</Button></Link>
      </div>
        <img src={randomImage} alt="aesthetic background of outdoor restaurant"/> 
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

        <div>
        <Button>UPDATE</Button>
        <Button onClick={handleDelete}>DELETE</Button>
        </div>
    </div>
  )
}

export default RestaurantDetails