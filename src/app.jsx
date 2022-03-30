import './app.css';

import React, { useEffect, useState } from 'react';
import Videos from './components/videos/videos';

const App = (props) => {
 const [videos, setVideos] = useState([]);
 useEffect(()=>{
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  
  fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&pageToken=CAUQAA&key=AIzaSyC9UqbYoxdLvqoKBSqbgI-LkNevl0qr56E", requestOptions)
  .then(response => response.json())
  .then(result => setVideos(result.items))
  .catch(error => console.log('error', error));
 }, []);
 return <Videos videos={videos}/>;
};

export default App;