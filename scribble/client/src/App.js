// Import react to allow us to use react components
import React from "react";
// Router acts as a wrapper for our project
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    <Router basename={"/temp"} >
      <div>
        <Nav />
        <Switch>
          {/* Set our routes for home, that will load the home component */}
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/atramentTest`} component={atramentTest} />
          <Route path={`${process.env.PUBLIC_URL}/testAuth`} component={testAuth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;