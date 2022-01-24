import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import ShipData from './components/ShipData';

function App () {
  return (
    <div>
      <Routes>
        <Route path='shipdata' element={<ShipData />} />
      </Routes>

      
    </div>
  );
}

export default App;
