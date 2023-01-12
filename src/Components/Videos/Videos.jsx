import React from 'react'
import ChannelCard from '../ChannelCard/ChannelCard';
import VideoCard from '../VideoCard/VideoCard';
import styles from './Videos.module.scss';

const Videos = ({ videos, suggestedVideos, channelVideos }) => {

  return (
    <div className={styles.Videos}>
        {videos && videos[0].map((item, index) => (
            <div key={index}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channel={item} />}
            </div>
        ))}
        {suggestedVideos && suggestedVideos.map((item, index) => (
          <div key={index}>
            {item.id.videoId && <VideoCard video={item} />}
          </div>
        ))}
        {channelVideos && channelVideos.map((item, index) => (
          <div key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channel={item} />}
          </div>
        ))}
    </div>
  )
}

export default Videos