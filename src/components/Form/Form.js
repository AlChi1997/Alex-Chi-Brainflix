const Form = ({videoComments}) => {
    if(videoComments === undefined){
        return <p>Loading...</p>;
    }
    return (
        <div>
        <ul>
            {videoComments.map((comment) => (
                <li key={comment.id}>
                    {comment.name}
                </li>
            ))}
        </ul>
        </div>
    );
    }

export default Form;