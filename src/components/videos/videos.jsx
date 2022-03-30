import React from 'react';
import Video from '../video/video';
import styles from './videos.module.css';

const Videos = (props) => (
    <ul className={styles.videos}>
       {props.videos.map(video => (<Video key={video.id} video = {video}/>))}
    </ul>
);

export default Videos;