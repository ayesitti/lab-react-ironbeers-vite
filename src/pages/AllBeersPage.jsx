import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
    const [beers, setBeers] = useState([]);
    
    useEffect(() => {
        axios.get(`${API_URL}`)
        .then((response) => {
            console.log(response);
            setBeers(response.data)
        })
        .catch((e)=> console.error(e))
    }, [])
    if (!beers) {
        return <div className='beerLoading'>Brewing the beers... </div>
    }
  return (
    <div>
        <h2>All Beers</h2>
        {beers.map((beer) => {
            return (
                <article key={beer._id}>
                    <Link to={`/beers/${beer._id}`}>
                        <img src={beer.image_url} alt="beer image" />
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                    </Link>

                </article>
            )
        })}

    </div>
  )
  }

export default AllBeersPage