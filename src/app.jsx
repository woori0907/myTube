import './app.module.css';

import React, { useCallback, useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import Videos from './components/videos/videos';
import VideoDetail from './components/detail/video_detail';
import styles from './app.module.css'

const App = ({youtube}) => {
 const [videos, setVideos] = useState([]);
 const [selectedVideo, setSelectedVideo] = useState(null);
 useEffect(()=>{
   youtube
   .mostPopular()
   .then(videos => setVideos(videos));
 }, [youtube]);

 const searchVideos = useCallback((query) => {
  youtube
  .search(query)
  .then(videos => {
    setVideos(videos);
    selectVideo(null);
  });
 }, [youtube]);

 const selectVideo = (video) => {
   setSelectedVideo(video);

 }

 return (
   <>
   <div>
      <Navbar onSearch={searchVideos}/>
      <section className={styles.content}>
        {selectedVideo&&(<div className={styles.detail}>
          <VideoDetail video={selectedVideo}/>
        </div>
        )}
        <div className={styles.list}>
          <Videos videos={videos} onVideoClick={selectVideo} display={selectedVideo? 'list' : 'grid'}/>
        </div>
      </section>
    </div>
  </>
 );
};

export default App;