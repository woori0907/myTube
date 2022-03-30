import React from 'react';
import styles from './video.module.css';

const Video = ({video:{snippet}}) => (
    <>
    <li className={styles.container}>
        <div className={styles.item}>
            <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="" />
            <div className={styles.info}>
                <p className={styles.title}>{snippet.title}</p> 
                <p className={styles.channel}>{snippet.channelTitle}</p>
            </div>
        </div>
     </li>      
    </>
);

export default Video;