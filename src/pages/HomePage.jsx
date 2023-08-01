import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import beerPhoto from "/Users/angelicaturbela/Desktop/Ironhack/LABS/lab-react-ironbeers-vite/src/assets/beers.png";
import draftBeer from "/Users/angelicaturbela/Desktop/Ironhack/LABS/lab-react-ironbeers-vite/src/assets/random-beer.png";
import newBeerPhoto from "/Users/angelicaturbela/Desktop/Ironhack/LABS/lab-react-ironbeers-vite/src/assets/new-beer.png";



function HomePage() {
  // const [beerpage, setBeerPage] = useState(null)
  // useEffect(() => {
  //     // axios .get(`${API_URL}/`)
  // })
  return (
    <div>
      <h1>Welcome to the Beer Home Page</h1>

      <Link to="/beers">
        <img src={beerPhoto} alt="beerphoto" />
        <h2>All Beers</h2>
      </Link>
      <Link to="/random-beer">
        <img src={draftBeer} alt="randombeer" />
        <h2>Random Beer</h2>
      </Link>
      <Link to="/new-beer">
        <img src={newBeerPhoto} alt="newbeer" />
        <h2>New Beer</h2>
      </Link>
    </div>
  );
}

export default HomePage;
