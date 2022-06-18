import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import './App.css';

//import of stand alone components
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

//import pages
import SearchRestaurants from "./Pages/Restaurant/SearchRestaurants";
import CreateRestaurants from "./Pages/Restaurant/CreateRestaurants";
import SingleRestaurant from "./Pages/Restaurant/SingleRestaurant";

import CreateReservation from "./Pages/Reservation/CreateReservation";
import AllReservations from "./Pages/Reservation/AllReservations";
import SingleReservation from "./Pages/Reservation/SingleReservation";

function App() {
  return (
    <div className="main">
      <NavBar />
      <Routes>

        <Route path="/" element={<SearchRestaurants/>}/>
        <Route path="/new/restaurant" element={<CreateRestaurants/>}/>
        <Route path="/restaurant/:id" element={<SingleRestaurant/>}/>

        <Route path="/new/reservation" element={<CreateReservation/>}/>
        <Route path="/reservations" element={<AllReservations/>}/>
        <Route path="/reservation/:id" element={<SingleReservation/>}/>

      </Routes>
    </div>
  );
}

export default App;