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

    useEffect(() => {
        fetchShip()
    }, [])
    return (
        <div className='container'>
            {
                ships.map((ship) => {
                    return (
                        // https://getbootstrap.com/docs/5.1/components/card/
                        <div className="card d-inline-flex p-2 bd-highlight p-3 mb-2 bg-success text-white" style= {{width: "18rem" }} key={ship?.name}>
                            <div className="card-body overflow-auto" style={{ height: '18rem' }}>
                                <h3 className="card-title"> Name: {ship.name}</h3>
                                <h4 className="card-text"> Model: {ship.model}</h4>
                                <h4 className="card-text"> Manufacturer: {ship.manufacturer}</h4>
            
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default ShipData;
