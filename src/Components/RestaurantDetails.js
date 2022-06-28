import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate } from "react-router-dom";
import "../Styles/RestaurantDetails.css";

function RestaurantInfo() {
  const [ restaurant, setRestaurant ] = useState([]);

  const navigate = useNavigate();
  const {id} = useParams();
  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${url}/api/restaurants/${id}`)
      .then((res) => {
        return res.json();
      }).then((data) => {
        setRestaurant(data);
      }).catch((err) => console.log(err));
  });

  const handleDelete = () => {

  }

  return (
    <div>
      <div>
        {restaurant.name}
      </div>
    </div>
  )
}

export default RestaurantInfo