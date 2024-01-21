import { HashRouter as Link } from "react-router-dom";

function Comments() {
    return (
        <div className="Feeling">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>
          <h2>Any comments you want to leave?</h2>
          <input id="inputs" type="text"></input>
          <Link to="/Feedback/">
            <button>Next</button>
          </Link>
        </div>
      );
}

export default Comments