import { Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from "react";

//import of stand alone components
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

//import pages
import SearchRestaurants from "./Pages/SearchRestaurants";
import CreateRestaurants from "./Pages/CreateRestaurants";
import SingleRestaurant from "./Pages/SingleRestaurant";

import CreateReservation from "./Pages/CreateReservation";
import AllReservations from "./Pages/AllReservations";
import SingleReservation from "./Pages/SingleReservation";

function App() {
  const [ input, setInput ] = useState('');

  const handleInput = (event) => {
      event.preventDefault();
      setInput(event.target.value)
      // localStorage.setItem('searchInput', input);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput('');
  }

  return (
    <div className="main">
      <NavBar handleSubmit={handleSubmit} handleInput={handleInput} input={input}/>
      <Routes>

        <Route path="/" element={<SearchRestaurants setInput={setInput} input={input}/>}/>
        <Route path="/newRestaurant" element={<CreateRestaurants/>}/>
        <Route path="/restaurant/:id" element={<SingleRestaurant />}/>

        <Route path="/newReservation" element={<CreateReservation/>}/>
        <Route path="/reservations" element={<AllReservations/>}/>
        <Route path="/reservation/:id" element={<SingleReservation/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;