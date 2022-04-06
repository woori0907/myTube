import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video, video:{snippet}}) => (
       <section className={styles.detail}>
           <iframe className={styles.video} type="text/html" width="100%" height="550px" autoplay="1"
src={`https://www.youtube.com/embed/${video.id}`}
frameborder="0" allowfullscreen ></iframe>
<h2>{snippet.title}</h2>
<h3>{snippet.channelTitle}</h3>
<p>{snippet.description}</p>
       </section>
    );

export default VideoDetail;