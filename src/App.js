import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainNavigation from "./shared/componenets/Navigation/MainNavigation";
import Home from "./home/pages/Home";
import AboutUs from "./aboutUs/pages/AboutUs";
import Menu from "./menu/pages/Menu";
import Contact from "./contactUs/pages/Contact";
function App() {
  return (
    <div>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/aboutUs">
              <AboutUs />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/contactUs">
              <Contact />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
