import { Link } from 'react-router-dom';
import './VideoList.scss';

const VideoList = ({videos,videoSelection}) => {

    console.log(videos);

    console.log(videos[0].img);

    return (
        <div className="videolist">
        <h4 className="videolist__title">NEXT VIDEOS</h4>
            {videos.map((video) => (
                <div className="videolist__item" key={video.id}>
                    <Link className="videolist__page" to={`/video/${video.id}`} onClick={() => videoSelection(video.id)}>
                        <div className="videolist___container">
                            <img className="videolist__img" src={video.image} alt={video.title} />
                        </div>
                        <div className='videolist__information'>
                            <h3 className='videolist__name'>{video.title}</h3>
                            <h4 className='videolist__channel'>{video.channel}</h4>
                        </div>
                    </Link>
                </div>
            ))} 
        </div>
    );}

export default VideoList;