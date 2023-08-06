import "./VideoPlayer.scss";

const VideoPlayer = ({videoPlayerVideo}) => {
    console.log(videoPlayerVideo);
    return (
        <div className='videoplayer'>
            <video className="videoplayer__video" controls poster={videoPlayerVideo.image} >
                <source src={videoPlayerVideo.video} type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoPlayer;