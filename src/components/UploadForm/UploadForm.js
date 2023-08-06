import thumbnail from '../../assets/Images/Upload-video-preview.jpg';
import upload from '../../assets/Images/upload.svg';
import './UploadForm.scss';

const UploadForm = () => {
    return (
        <div className="upload">   
            <h1 className="upload__title">Upload Video</h1>
            <form className="upload__form">
                <div className='upload__section'>
                    <h2 className="upload__thumbnail-title">VIDEO THUMBNAIL</h2>
                    <img className="upload__thumbnail" src={thumbnail} alt="Upload video preview" />
                </div>
                <label className="upload__label" htmlFor="upload__video">TITLE YOUR VIDEO</label>
                    <input type="text" className="upload__form-title" placeholder="Add a title to your video" />
                <label className="upload__label" htmlFor="upload__video">ADD A VIDEO DESCRIPTION</label>
                    <input type="text" className="upload__form-description" placeholder="Add a description to your video" />
                <div className="upload__container">
                    <button className="upload__button">
                        <img className="upload__uploadimage" src={upload} alt="upload img" />
                            PUBLISH
                        </button>
                    <div className="upload__cancel">Cancel</div>
                </div>
            </form>
        </div>
    );
}

export default UploadForm;