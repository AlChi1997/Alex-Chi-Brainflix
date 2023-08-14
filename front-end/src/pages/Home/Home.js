import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Header from '../../components/Header/Header';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Video from '../../components/Video/Video';
import Form from '../../components/Form/Form';
import VideoList from '../../components/VideoList/VideoList';
import './Home.scss';

const Home = () => {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const { videoId } = useParams();
  const [loading, setLoading] = useState(true);
  axios.defaults.baseURL = 'http://localhost:8080';

  const formatedTimestamp = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }

  const selectedVideoCreated =
  selectedVideo.timestamp && new Date(selectedVideo.timestamp).toLocaleString('en-US', formatedTimestamp);

  useEffect(() => {

    axios
      .get('/videos')
      .then((response) => {
        setVideoList(response.data);
        setSelectedVideo(response.data[0]);
        console.log(setSelectedVideo);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching video list:", error);
      });
  }, []);

  useEffect(() => {
    if (!videoId) {
      axios
        .get(`/videos/${selectedVideo.id}`)
        .then((response) => {
          setSelectedVideo(response.data);
          console.log(setSelectedVideo);
          setLoading(false);
        })
        .catch((error) => {
            setLoading(false);
          console.error("Error fetching selected video:", error);
        });
    } else {
      axios
        .get(`/videos/${videoId}`)
        .then((response) => {
          setSelectedVideo(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error fetching selected video:", error);
        });
    }
  }, [videoId, selectedVideo.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(videoList);
  console.log(selectedVideo);

  const handleVideoSelect = (videoId) => {
    axios
      .get(`/videos/${videoId}`)
      .then((response) => {
        setSelectedVideo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching selected video:", error);
      });
  };

  return (
    <div className='home'>
      <Header />
      <VideoPlayer videoPlayerVideo={selectedVideo}/>
      <div className='home__video'>
        <Video videoInfo={selectedVideo} selectedVideoCreated={selectedVideoCreated} />
        <Form videoComments={selectedVideo.comments} formatedTimestamp={formatedTimestamp}/> 
      </div>
      <VideoList videos={videoList.filter((video) => video.id !== selectedVideo.id)} videoSelection={handleVideoSelect} />
    </div>
  );
};

export default Home;
