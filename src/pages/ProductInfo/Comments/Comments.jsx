import { useState } from 'react';
import CommentCart from '../../../Components/CommentCart/CommentCart';

export default function Comments({ comments }) {
    const [numOfComments, setNumOfComments] = useState(6);
    function changeNumOfComments() {
        setNumOfComments((p) => (p == 6 ? p * 2 : p / 2));
    }

    const dataComments =
        comments && comments.slice(0, numOfComments);

    return (
        <>
            {comments && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {dataComments.map((comment) => (
                        <CommentCart
                            key={comment.id}
                            data={comments}
                            comment={comment.body}
                            userName={comment.user.fullName}
                            rate={comment.likes}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
