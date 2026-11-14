import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";
export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "ahmedraza",
      remarks: "Good",
      rating: 5,
    },
  ]);
  let addNewComment = (comment) => {
    setComments((currComment) => {
      return [...currComment, comment];
    });
  };
  return (
    <>
      <div>
        <h3>All Comments!</h3>
        {comments.map((comment, idx) => {
          return <div className="Comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>(rating = {comment.rating})</span>
            <p>- {comment.username}</p>
          </div>;
        })}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
