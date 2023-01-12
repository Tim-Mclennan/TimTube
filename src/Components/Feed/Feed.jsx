import React from 'react'
import { useState, useEffect } from 'react'
import SideBar from '../SideBar/SideBar';
import Videos from '../Videos/Videos';
import styles from "./Feed.module.scss";
import { FetchAPI } from '../../Utils/FetchAPI';

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    // useEffect hooks that reloads data on change of category and intilisation:
    useEffect(() => {
        FetchAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items));
        console.log(videos);

    }, [selectedCategory])
    console.log(videos);

  return (
    <div className={styles.Feed}>
        <div className={styles.Feed_Categories}>
            <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <p className={styles.Feed_Categories_Copyright}>Copyright 2023 - Tim Media</p>
        </div>
        <div className={styles.Feed_Videos}>
            <p className={styles.Feed_Videos_Header}>{selectedCategory} 
                <span className={styles.Feed_Videos_Header_Category}> Videos</span>
            </p>
            <Videos videos={[videos]} />
        </div>
    </div>
  )
}

export default Feed