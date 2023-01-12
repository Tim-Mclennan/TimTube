import React, { useState, useEffect } from 'react'
import styles from "./VideoDetail.module.scss";
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from "react-player";
import { FetchAPI } from '../../Utils/FetchAPI';
import Videos from '../Videos/Videos';
import { BsCheckCircleFill } from "react-icons/bs";


const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const videoResults = async () => {
        const videoDetails = await FetchAPI(`videos?part=snippet,statistics&id=${id}`);
        setVideoDetail(videoDetails.items[0]);
        
        const suggestedVid = await FetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`);
        setSuggestedVideos(suggestedVid.items);
        };
    videoResults();
  }, [id])

  // Destructuring - Taking the 'snippet' property including its own keys out of the videoDetail property to minimise the syntax.
//   const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
  
  return (
    <div className={styles.VideoDetail}>
      <div className={styles.VideoDetail_Container}>
        <div className={styles.VideoDetail_Container_Video}>
          <div className={styles.VideoDetail_Container_Video_Content}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className={styles.VideoDetail_Container_Video_Content ? styles.VideoDetail_Container_Video_Content_Player + ' ' + "react-player" : styles.VideoDetail_Container_Video_Content_Player} controls width='100%'
          height='70vh' margin='5px'/> 
            <p className={styles.VideoDetail_Container_Video_Content_Title}>{videoDetail && videoDetail.snippet.title}</p>
            <div className={styles.VideoDetail_Container_Video_Content_Channel}>
                <Link to={`/channel/${videoDetail && videoDetail.snippet.channelId}`}>
                    <p className={styles.VideoDetail_Container_Video_Content_Channel_Title}>
                        {videoDetail && videoDetail.snippet.channelTitle}
                        <BsCheckCircleFill  className={styles.VideoDetail_Container_Video_Content_Channel_Title_Icon} />
                    </p>
                </Link>
                <div className={styles.VideoDetail_Container_Video_Content_Channel_Count}>
                    <p>{videoDetail && parseInt(videoDetail.statistics.viewCount).toLocaleString()} Views</p>
                    <p>{videoDetail && parseInt(videoDetail.statistics.likeCount).toLocaleString()} Likes</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.VideoDetail_Suggestions}>
        <Videos suggestedVideos={suggestedVideos}/>
      </section>
    </div>
  )
}

export default VideoDetail