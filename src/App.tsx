import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import { gql, useQuery } from '@apollo/client';

function App() {
  const GET_USERS = gql`
  query GetUsers {
    users {
      lastName
      firstName
    }
  }`;

  const { loading, error, data } = useQuery(GET_USERS);
  console.log(data, ' data')


  return (
    <div className="App">
      <header className="App-header"></header>
      <button>get cookie</button>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
