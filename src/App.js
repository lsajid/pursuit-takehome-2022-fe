import { Routes, Route } from "react-router-dom";
import './App.css';
import { useState, useEffect } from "react";

//import of stand alone components
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

//import pages
import AllRestaurants from "./Pages/AllRestaurants";
import CreateRestaurants from "./Pages/CreateRestaurants";
import SingleRestaurant from "./Pages/SingleRestaurant";

import CreateReservation from "./Pages/CreateReservation";
import AllReservations from "./Pages/AllReservations";
import SingleReservation from "./Pages/SingleReservation";

function App() {
  const [ input, setInput ] = useState(''); //useState hook for the searchInput ...

  const handleInput = (event) => { ///handles search input
      setInput(event.target.value);
  }

  const handleSubmit = (event) => { //handles search submit
    event.preventDefault();
    setInput('');
  }

  return (
    <div className="main">

      {/* pass handleInput and input into the navbar for functionalit y */}
      <NavBar handleSubmit={handleSubmit} handleInput={handleInput} input={input}/>
      <Routes>  
        {/* pass setInput and input into AllRestaurants */}
        <Route path="/" element={<AllRestaurants setInput={setInput} input={input}/>}/>
        <Route path="/newRestaurant" element={<CreateRestaurants/>}/>
        <Route path="/restaurant/:id" element={<SingleRestaurant/>}/>

        <Route path="/newReservation" element={<CreateReservation/>}/>
        <Route path="/reservations" element={<AllReservations/>}/>
        <Route path="/reservation/:id" element={<SingleReservation/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;