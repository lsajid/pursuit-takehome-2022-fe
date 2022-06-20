import { Routes, Route } from "react-router-dom";
import './App.css';

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
      <Footer/>
    </div>
  );
}

export default App;