import React from 'react';
import {Link} from "react-router-dom";

import restaurantStockImg from "../assets/restaurant.png";
import "../Styles/Restaurant.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import formatTime from '../util/formatTime';

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