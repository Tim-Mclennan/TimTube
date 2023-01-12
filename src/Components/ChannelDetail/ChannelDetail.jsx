import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./ChannelDetail.module.scss";
import Videos from '../Videos/Videos';
import ChannelCard from '../ChannelCard/ChannelCard';
import { FetchAPI } from '../../Utils/FetchAPI';

const ChannelDetail = () => {
  const [channel, setChannel] = useState(null)
  const [channelVideos, setChannelVideos] = useState([])
  const { id } = useParams();

  useEffect(() => {
    console.log("This useeffect worked");
  }, []);

  //Render channel data depending on the ID. Id is deconstructed from the useParams hook above.
  useEffect(() => {
    const fetchResults = async () => {
      console.log("This useeffect worked");
      // Grabs channel:
      const channelData = await FetchAPI(`channels?part=snippet&id=${id}`);
      console.log(channelData);
      setChannel(channelData?.items[0]);
      
      // Grabs channels videos:
      const channelVideo = await FetchAPI(`search?channelId=${id}&part=snippet&order=date`);
      setChannelVideos(channelVideo?.items);
      console.log(channelVideos);
    };
    fetchResults();
    console.log("This useeffect worked");

  }, [id]);

  console.log(channel);
  console.log(channelVideos);

  return (
    <div className={styles.ChannelDetail}>
      <ChannelCard channel={channel} />
      <section className={styles.ChannelDetail_Section}>
        <Videos channelVideos={channelVideos} />
      </section>
    </div>
  )
}

export default ChannelDetail