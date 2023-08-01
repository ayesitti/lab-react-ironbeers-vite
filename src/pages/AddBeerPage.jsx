import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTip, setBrewersTip] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const addBeer = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTip,
      attenuationLevel,
      contributedBy,
    };
    try {
      const response = await axios.post(`${API_URL}/beers/new`, addBeer);
      console.log(response.data);
      //   navigate(`/${response.data.id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-box">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-box">
        <label htmlFor="tagline">Tagline:</label>
        <input
          type="text"
          id="tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
      </div>
      <div className="form-box">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-box">
        <label htmlFor="firstBrewed">First Brewed:</label>
        <input
          type="text"
          id="firstBrewed"
          value={firstBrewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
        />
      </div>
      <div className="form-box">
        <label htmlFor="brewersTip">Brewer's Tip:</label>
        <input
          type="text"
          id="brewersTip"
          value={brewersTip}
          onChange={(e) => setBrewersTip(e.target.value)}
        />
      </div>
      <div className="form-box">
        <label htmlFor="attenuationLevel">Attenuation Level:</label>
        <input
          type="number"
          id="attenuationLevel"
          value={attenuationLevel}
          onChange={(e) => setAttenuationLevel(e.target.value)}
        />
      </div>
      <div className="form-box">
        <label htmlFor="contributedBy">Contributed By:</label>
        <input
          type="text"
          id="contributedBy"
          value={contributedBy}
          onChange={(e) => setContributedBy(e.target.value)}
        />
      </div>
      <button>Add</button>
    </form>
  );
}

export default AddBeerPage;
