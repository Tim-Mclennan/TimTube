import React from 'react'
import styles from "./VideoCard.module.scss";
import { Link } from 'react-router-dom';
import { BsCheckCircleFill } from "react-icons/bs";

import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from "../../Utils/constants"

// Destructured the JSON file to extract only the information we need - The YouTube video ID and snippet (Title, Author, Date etc.)
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  return (
    <div className={styles.VideoCard}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}  className={styles.VideoCard_Img_Link}>
            {/* The reason I am using '?.' is because if React is unable to find the URL for the thumbnail, it will simply return an undefined instead of giving an error to the console.  */}
            <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} className={styles.VideoCard_Img} />
        </Link>
        <div className={styles.VideoCard_Content}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}  className={styles.VideoCard_Content_Link}>
                <p className={styles.VideoCard_Content_Title}>{snippet?.title.slice(0, 70) || demoVideoTitle.slice(0, 50)}</p>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}  className={styles.VideoCard_Content_Channel}>
                <p className={styles.VideoCard_Content_Channel_Title}>{snippet?.channelTitle || demoChannelTitle}</p>
                <BsCheckCircleFill className={styles.VideoCard_Content_Channel_Icon}/>
            </Link>
        </div>
    </div>
  )
}

export default VideoCard