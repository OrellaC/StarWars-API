import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'

const ShipData = () => {
    const [ships, setships] = useState([])
    const fetchShip = async () => {

        try {
            // Research documentation of SWAPI to find the endpoint for the starships resource
            const response = await axios.get('https://swapi.dev/api/starships')
            setships(response.data.results)
            console.log(ships)

        } catch (error) {
            console.error(error)

        }
    }

    useEffect(() => fetchShip)
    return (
        <div className='container'>
            {
                ships.map((ship) =>{
                    return(
                        <div className='card' key={ship?.name}>
                            <h3>{ship.name}</h3>
                            <h4>{ship.model}</h4>
                            <h5>{ship.manufacturer}</h5>
                            </div>
                    )
                })
            }

        </div>
    );
}

export default ShipData;
