import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { commentsRating } from "../../redux/ratingsSlice";

function Feeling() {
  const [comments, setComments] = useState("");
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(commentsRating(comments));
  };

  return (
    <div className="Feeling">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <h2>Any comments you want leave?</h2>
      <input
        onChange={(event) => setComments(event.target.value)}
        id="inputs"
        type="text"
        placeholder="Comments"
      ></input>
      <Link to="/Review/">
        <button onClick={onClick}>Next</button>
      </Link>
    </div>
  );
}

export default Feeling;
