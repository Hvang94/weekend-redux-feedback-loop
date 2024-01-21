import React from "react";
import "./App.css";
import Feeling from "../Feeling/Feeling";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";
import Review from "../Review/Review";
import Success from "../Success/Success";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact>
          <Feeling />
        </Route>

        <Route path="/Understanding/">
          <Understanding />
        </Route>

        <Route path="/Support/">
          <Support />
        </Route>

        <Route path="/Comments/">
          <Comments />
        </Route>

        <Route path="/Review/">
          <Review />
        </Route>

        <Route path="/Success/">
          <Success />
        </Route>
      </div>
    </Router>
  );
}

export default App;
