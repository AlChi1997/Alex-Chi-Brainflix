const Video = ({videoInfo}) => {

    return (
        <div>
        <h1>{videoInfo.title}</h1>
        <img src={videoInfo.image} alt={videoInfo.title} />
        </div>
    );
}

export default Video;