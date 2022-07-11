//react lib
import React from 'react';
//packages
import {Link} from "react-router-dom";
//material UI
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import {Grid, Paper, Typography} from '@mui/material';
//css
import "../Styles/Restaurant.css";
//image
import restaurantStockImg from "../assets/restaurant.png";
//util
import formatTime from '../util/formatTime';

// What parts of the app need to be refactored?
// What will you need to create from scratch?
// Where will you need to add props?
// Where will you need to add state? What is the best data type for state?
// Where will you need to add user interactions? How do these interactions work with the state?
// What unexpected states or other edge cases will you need to handle?
// How can you break up the work into stages? How can you test or verify your code as you go?


function Restaurant( { singleRestaurant } ) {
  const Img = styled("img")({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  
  const paperStyle = {
    p: 2,
    margin: 'auto',
    maxWidth: 500,
    flexGrow: 1,
    backgroundColor: "rgb(246, 242, 237)"
  }

  const id = singleRestaurant.id;


  return ( 
    <div className='restaurant-container'>
      <Link to={`/restaurant/${id}`}>
        <Paper
        sx={paperStyle}
        >
          <Grid container spacing={2}>
            
            <Grid item sx={{ width: 128, height: 128 }}>
              <Img alt={`Dining view of ${singleRestaurant.name}`} src={restaurantStockImg}/>
            </Grid>

            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography className="restaurant-name" gutterBottom variant="subtitle1" component="div">
                    {singleRestaurant.name}
                  </Typography>
                  <hr/>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    <div>
                      <LocationOnIcon/> 
                      <span>
                        {singleRestaurant.location}
                      </span>
                    </div>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div>
                      <RestaurantOutlinedIcon/>
                      <span>
                      {singleRestaurant.cuisine}
                      </span>
                    </div>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div>
                      <AccessTimeOutlinedIcon/>
                      <span>
                        {formatTime(singleRestaurant.openingTime)} - {formatTime(singleRestaurant.closingTime)}
                      </span>
                    </div>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div>
                      <span>
                        {singleRestaurant.price}
                      </span>
                    </div>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Link>
    </div>
  )
}

export default Restaurant