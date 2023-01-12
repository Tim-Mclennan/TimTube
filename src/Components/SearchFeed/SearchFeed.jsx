import React from 'react'
import { useState, useEffect } from 'react'
import Videos from '../Videos/Videos';
import styles from "./SearchFeed.module.scss";
import { FetchAPI } from '../../Utils/FetchAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  // useParams hook that will be populated by the users search term and then passed into the FetchAPI function:
    const  { searchTerm } = useParams();

    // useEffect hooks that reloads data upon search:
    useEffect(() => {
        FetchAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
    }, [searchTerm])

  return (
    <div className={styles.SearchFeed}>
        <p className={styles.SearchFeed_Header}>Search Results for: 
            <span className={styles.SearchFeed_Header_Category}> '{searchTerm}'</span>
        </p>
        <Videos videos={[videos]} />
    </div>
    
  )
}

export default SearchFeed