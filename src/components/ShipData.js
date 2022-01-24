import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'

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
                ships.map((ship) => {
                    return (
                        // https://getbootstrap.com/docs/5.1/components/card/
                        <div className='card' style="width: 18rem;" key={ship?.name}>
                            <div className="card-body">
                                <h3 className="card-title"> Name: {ship.name}</h3>
                                <p className="card-text"> Model: {ship.model}</p>
                                <p className="card-text"> Manufacturer: {ship.manufacturer}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default ShipData;
