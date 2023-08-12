import avatar from '../../assets/Images/Mohan-muruge.jpg';
import commentImg from '../../assets/Images/add_comment.svg';
import './Form.scss';

const Form = ({videoComments, formatedTimestamp}) => {
    const commentCreatedDate = (timestamp) => {
        return new Date(timestamp).toLocaleString('en-US', formatedTimestamp);
    };
    
    if(videoComments === undefined){
        return <p>Loading...</p>;
    }

    return (
        <div className="comments">
            <h3 className="comments__number">{(videoComments).length} Comments</h3>
            <form className="comments__form">
                <div className="comments__avatar">
                    <img className="comments__avatar-img" src={avatar} alt="Mohan-murage" />
                </div>
                <div className="comments__section">
                    <label className="comments__label" htmlFor="add__comment">JOIN THE CONVERSATION</label>
                    <input id="add__comments" type="text" placeholder="Add a new comment" />
                    <div id="comments__container">
                        <button id="comments__button">
                            <img id="comments__button-img" src={commentImg} alt="comment" />
                            COMMENT
                            </button>
                    </div>
                </div>
            </form>
            {videoComments.map((comment) => (
                <div className='comments__posted' key={comment.id}>
                    <div className='comments__posted-avatar'></div>
                    <div className='comments__info'>
                        <div className='comments__name'>{comment.name}</div>
                        <div className='comments__date'>{commentCreatedDate(comment.timestamp)}</div>
                        <div className='comments__comment'>{comment.comment}</div>
                    </div>
                </div>
            ))}
        </div>
    );
    }

export default Form;