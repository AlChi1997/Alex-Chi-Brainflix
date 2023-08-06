import { Link } from 'react-router-dom';

const VideoList = ({videos,videoSelection}) => {
    return (
        <div>
        <ul>
            {videos.map((video) => (
                <li key={video.id}>
                    <Link to={`/video/${video.id}`} onClick={() => videoSelection(video.id)}>
                        <img src={video.image} alt={video.title} />
                        <p>{video.title}</p>
                        <p>{video.channel}</p>
                    </Link>
                </li>))}
        </ul>
        </div>
    );
    }

export default VideoList;