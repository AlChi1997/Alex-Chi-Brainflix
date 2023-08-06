import thumbnail from '../../assets/Images/Upload-video-preview.jpg';

const UploadForm = () => {
    return (
        <div className="upload">   
            <h1 className="upload__title">Upload Video</h1>
            <img className="upload__thumbnail" src={thumbnail} alt="Upload video preview" />
            <form className="upload__form">
                <label className="upload__label" htmlFor="upload__video">TITLE YOUR VIDEO</label>
                    <input type="text" className="upload__title" placeholder="Add a title to your video" />
                <label className="upload__label" htmlFor="upload__video">ADD A VIDEO DESCRIPTION</label>
                    <input type="text" className="upload__description" placeholder="Add a description to your video" />
                <button className="upload__button">PUBLISH</button>
                <h2>Cancel</h2>
            </form>
        </div>
    );
}

export default UploadForm;