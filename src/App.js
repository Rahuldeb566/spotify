import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './Spotify';

function App() {

  const [token, setToken] = useState();

  useEffect(() => {
    
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
    console.log("I have a token ", token);
  }, []);
  return (
    <div className="App">

      {
        token ? (
          <h1>I am Logged in.</h1>
        ) : (
          <Login />
        )
      }
      {/* spotify logo */}
      {/* login with spotify button  */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
