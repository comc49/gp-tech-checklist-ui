import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';

function App() {

  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
