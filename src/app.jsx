import './app.module.css';

import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import Videos from './components/videos/videos';

const App = ({youtube}) => {
 const [videos, setVideos] = useState([]);
 useEffect(()=>{
   youtube
   .mostPopular()
   .then(videos => setVideos(videos));
 }, []);

 const searchVideos = (query) => {
  youtube
  .search(query)
  .then(videos => setVideos(videos));
 }
 return (
   <>
    <Navbar onSearch={searchVideos}/>
    <Videos videos={videos}/>
  </>
 );
};

export default App;