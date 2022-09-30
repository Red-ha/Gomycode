import React from 'react';
import logo from './logo.svg';
import { PROFILEPHOTO } from './Component/Profile/ProfilePhoto.js';
import { FULLNAME } from './Component/Profile/FullName.js';
import { ADDRESS } from './Component/Profile/Address.js';
import './App.css';


function App() {
  return (
    
    <div className="App">

      <PROFILEPHOTO />
      <FULLNAME />
      <ADDRESS />
    
    </div>
  );
}

export default App;
