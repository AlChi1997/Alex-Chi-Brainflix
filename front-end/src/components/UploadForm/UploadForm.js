import { Link } from 'react-router-dom';
import upload from '../../assets/Images/upload.svg';
import './UploadForm.scss';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useState } from 'react';

const UploadForm = () => {

    const [thumbnailImg, setThumbnailImg] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);

    const handleThumbnail = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setThumbnailImg(reader.result);
            };
            reader.readAsDataURL(file);

            setThumbnailFile(file);
        }
    };

    const handlePublish = (e) => {
        e.preventDefault();
        const title = document.querySelector('.upload__form-title').value;
        const description = document.querySelector('.upload__form-description').value;

        const uniqueId = uuidv4();

        console.log("Title: ", title);
        console.log("Description: ", description);
        console.log("Unique ID: ", uniqueId);
        console.log("Thumbnail: ", thumbnailFile);


        const formData = new FormData();
        formData.append('id', String(uniqueId));
        formData.append('title', String(title));
        formData.append('description', String(description));
        formData.append('image', thumbnailFile);


        console.log(formData);
        console.log("FormData: ", Object.fromEntries(formData));
        console.log("FormData Serialized: ", JSON.stringify(Object.fromEntries(formData)));

        axios
            .post('http://localhost:8080/videos', formData)
            .then((response) => {
                alert('Video uploaded successfully');
            })
            .catch((error) => {
                alert('Error uploading video');
                console.error('Error uploading video:', error);
            });
    }

    return (
        <div className="upload">   
            <h1 className="upload__title">Upload Video</h1>
            <form className="upload__form">
                <div className='upload__content'>
                    <div className='upload__section'>
                        <h2 className="upload__thumbnail-title">VIDEO THUMBNAIL</h2>
                        {thumbnailImg ? (
                            <img className="upload__thumbnail" src={thumbnailImg} alt="Upload video preview" />
                        ) : (
                        <input type="file" accept="image/*" alt="Upload video preview"  onChange={handleThumbnail} />
                        )}
                    </div>
                    <div className='upload__fields'>
                    <label className="upload__label" htmlFor="upload__video">TITLE YOUR VIDEO</label>
                        <input type="text" className="upload__form-title" placeholder="Add a title to your video" />
                    <label className="upload__label" htmlFor="upload__video">ADD A VIDEO DESCRIPTION</label>
                        <input type="text" className="upload__form-description" placeholder="Add a description to your video" />
                    </div>
                </div>
                <div className="upload__container">
                    <Link to="/" className="upload__link">
                        <button className="upload__button" onClick={handlePublish}>
                            <img className="upload__uploadimage" src={upload} alt="upload img" />
                                PUBLISH
                            </button>
                    </Link>
                    <Link to="/upload" className="upload__cancel">
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default UploadForm;