import { HashRouter as Link } from "react-router-dom";

function Support() {
    return (
        <div className="Feeling">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>
          <h2>How well are you being supported?</h2>
          <p>Rating 1-5</p>
          <input id="inputs" type="text"></input>
          <Link to="/Comments/">
            <button>Next</button>
          </Link>
        </div>
      );
}

export default Support