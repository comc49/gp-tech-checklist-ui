
import React, { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import axios from 'axios';
import { createLogicalNot } from 'typescript';


function Homepage() {
    const loginToGoogle = () => {
        window.location.href = 'http://localhost:3001/api/auth/login';
    }

  return (
    <div className="Homepage">
        <Button onClick={loginToGoogle} colorScheme='blue'>Google Sign In</Button>
    </div>
  );
}

export default Homepage;

