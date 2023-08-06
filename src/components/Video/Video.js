import views from '../../assets/Images/views.svg';
import likes from '../../assets/Images/likes.svg';
import './Video.scss';

const Video = ({videoInfo,selectedVideoCreated}) => {

    return (
        <div className="video">
        <video className="video__player" controls poster={videoInfo.image} >
            <source src={videoInfo.video} type="video/mp4" />
        </video>
        <div className="video__section">
            <section className="video__info">
                <h1 className="video__title">{videoInfo.title}</h1>
                <section className="video__details">
                    <p className="video__channel">By:{videoInfo.channel}</p>
                    <div className="video__date">{selectedVideoCreated}</div>
                    <div className="video__views">
                        <img src={views} alt="views" />
                        {videoInfo.views}
                    </div>
                    <div className="video__likes">
                        <img src={likes} alt="likes" />
                        {videoInfo.likes}
                    </div>
                </section>
                <p className="video__description">{videoInfo.description}</p>
            </section>

        </div>
        <img src={videoInfo.image} alt={videoInfo.title} />
        </div>
    );
}

export default Video;
