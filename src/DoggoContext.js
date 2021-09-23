import React from 'react';

let state = {
  loggedIn: false,
  username: '',
};

export const DoggoContext = React.createContext(state);
