import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearState } from "../../redux/ratingsSlice";

function Review() {
  const dispatch = useDispatch();
  const { feeling, understanding, support, comments } = useSelector(
    (state) => state.ratings);
  const feedbackData = { feeling, understanding, support, comments };

  const submit = () => {
    axios
      .post("/api/feedback", feedbackData)
      .then((response) => {
        console.log(response.data);
        dispatch(clearState());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Feeling">
      <header>
        <h1 className="App-title">Review Your Feedback!</h1>
      </header>
      <ul>
        <li>Feeling: {feeling}</li>
        <li>Understanding: {understanding}</li>
        <li>Support: {support}</li>
        <li>Comments: {comments}</li>
      </ul>
      <Link to="/Success/">
        <button data-testid="next" onClick={submit}>Submit</button>
      </Link>
    </div>
  );
}

export default Review;
