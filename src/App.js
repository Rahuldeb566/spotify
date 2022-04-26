import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      // setToken(_token);


      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log('user', user);

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }

  }, []);

  return (
    <div className="App">

      {
        token ? 
          <Player spotify={spotify} />
         : 
          <Login />
        
      }
      {/* spotify logo */}
      {/* login with spotify button  */}
      {/* <Login/> */}
    </div>
  );
}

export default App;
