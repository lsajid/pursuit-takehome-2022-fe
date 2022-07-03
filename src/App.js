import { Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from "react";

//import of stand alone components
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

//import pages
import Home from "./Pages/Home";
import SingleRestaurant from "./Pages/SingleRestaurant";
import IndexReservations from "./Pages/IndexReservations";


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
        <Route path="/" element={<Home setInput={setInput} input={input}/>}/>
        <Route path="/restaurant/:id" element={<SingleRestaurant/>}/>
        <Route path="/reservations" element={<IndexReservations/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;