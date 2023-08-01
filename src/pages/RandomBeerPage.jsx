import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);
  // const { id } = useParams();

  async function fetchRandomBeer() {
    try {
      const response = await axios.get(`${API_URL}`);
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchRandomBeer();
  }, []);
  if (!beer) {
    return <div className="beerLoading"> Brewing the beer...</div>;
  }

  return (
    <div>
      <img src={beer.image_url} alt="beer image" />
      <h2>{beer.name}</h2>
      <h3>"{beer.tagline}"</h3>
      <h4>First brewed on {beer.first_brewed}</h4>
      <h5>Attenuation level: {beer.attenuation_level}</h5>
      <p>{beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
}

export default RandomBeerPage;
