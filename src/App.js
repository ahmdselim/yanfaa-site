import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCourses } from "./store/Actions/action-creator";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Single from "./Pages/Single";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/single/:id" exact>
            <Single />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
