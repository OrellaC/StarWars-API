import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'

const ShipData = () => {
    const [ships, setships] = useState([])
    const fetchShip = async () => {

        try {

            const response = await axios.get('https://swapi.dev/api/starships')
            setships(response.data.results)
            console.log(ships)

        } catch (error) {
            console.error(error)

        }
    }

    useEffect(() => fetchShip)
    return (
        <div>

        </div>
    );
}

export default ShipData;
