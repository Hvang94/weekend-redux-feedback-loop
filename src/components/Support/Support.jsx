import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { supportRating } from "../../redux/ratingsSlice";

function Understanding() {
  const [rating, setRating] = useState("");
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(supportRating(parseInt(rating)));
  };

  return (
    <div className="Feeling">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <h2>How well are you being supported?</h2>
      <input
        onChange={(event) => setRating(event.target.value)}
        id="inputs"
        type="number"
        placeholder="Rate 1-5"
      ></input>
      <Link to="/Comments/">
        <button onClick={onClick}>Next</button>
      </Link>
    </div>
  );
}

export default Understanding;
