import React from 'react'
import styles from "./ChannelCard.module.scss";
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../../Utils/constants';

const ChannelCard = ({ channel }) => {

  console.log(channel);
  return (
    <div className={styles.ChannelCard}>
        <Link to={`/channel/${channel?.id?.channelId}`} >
            <div className={styles.ChannelCard_Content}>
                <img  className={styles.ChannelCard_Content_Img} src={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channel?.snippet?.title} />
                <p  className={styles.ChannelCard_Content_Title} >{channel?.snippet?.title}</p>
                <p>{parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers</p>
            </div>
        </Link>
    </div>
  )
}

export default ChannelCard