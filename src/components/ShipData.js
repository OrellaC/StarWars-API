import React, { useState, useEffect } from 'react'
import axios from 'axios'


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
                        <div className='card' key={ship?.name}>
                            <h3>{ship.name}</h3>
                            <h4>{ship.model}</h4>
                            <h5>{ship.manufacturer}</h5>
                        </div>

                        //         <div className="card" style={{ width: '18rem' }}>
                        // <img src={props.item.links?.[0].href} className="card-img-top" alt="..." />
                        // <div className="card-body  overflow-auto" style={{ height: '18rem' }}>
                        //     <h5 className="card-title">{props.item.data[0].title}</h5>
                        //     <p className="card-text">TESTING</p>  
                        //     <p>Location: {props.item.data[0].location}</p>
                        //     <p>Created: {props.item.data[0].date_created}</p>
                        //     <a href="#" className="btn btn-primary">Description</a>
                        // </div>
                    )
                })
            }

        </div>
    );
}

export default ShipData;
