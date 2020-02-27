// Import react to allow us to use react components
import React from "react";
// Router acts as a wrapper for our project
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Component from "react";

// Import the components we made to design the page
import Home from "./pages/Home";
// import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import atramentTest from "./pages/testingAtrament";
import testAuth from "./pages/Auth";
// Create our app function that will return our html like JSK to 
// Display our front end

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Set our routes for home, that will load the home component */}
          <Route exact path="/" component={Home} />
          <Route exact path="/atramentTest" component={atramentTest} />
          <Route exact path="/testAuth" component={testAuth} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;