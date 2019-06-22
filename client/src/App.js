import React from 'react';
import { BrowserRouter , Router, Route } from "react-router-dom";
import { NavLink }  from 'react-router-dom';
import Blogs from './components/Blogs'
import Hotels from './components/Hotels'
import MapContainer from './components/MapContainer'
import Profile from './components/Profile'
import Flights from './components/Flights'
import SignUp from './components/signUp.js';
import SignIn from './components/signIn.js';
import Mainprofile from './components/mainprofile.js';
import Prof from './components/Prof.js';
import Weather from './components/weather.js';
import Currancy from './components/currency.js'

import HomePage from './components/HomePage.js'


class App extends React.Component {


  render() {
 

    return (
      <BrowserRouter>
        <div>
          <header id="fh5co-header-section" className="sticky-banner">
            <div className="container">
              <div className="nav-header">
                <a
                  
                  className="js-fh5co-nav-toggle fh5co-nav-toggle dark"
                >
                  <i />
                </a>
                <h1 id="fh5co-logo" style={{color:'#f78536'}}>
                  
                    <i>
                      <img src="https://phoenixpwn.com/phoenix.png" />
                    </i>
                    Phoenix
                 
                </h1>
                <nav id="fh5co-menu-wrap" role="navigation">
                  <ul className="sf-menu" id="fh5co-primary-menu">
                    <li className="active">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/flights">Flights</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Hotels">Hotels</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Blogs">Blogs</NavLink>
                    </li>
                    <li>
                      <NavLink to="/SignIn">Sign In</NavLink>
                    </li>
                    <li>
                      <NavLink to="/SignUp">Sign Up</NavLink>
                    </li>
                   
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          <div>
          {/* <ScrollUpButton /> */}
            </div>
           
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Hotels" component={Hotels} />
          <Route exact path="/Blogs" component={Blogs} />
          <Route exact path="/Profile" component={Profile} />
          <Route path="/Mainprofile" component={Mainprofile} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/flights" component={Flights} />
          <Route path="/Prof" component={Prof} />
          <Route path="/MapContainer" component={MapContainer} />
 					<Route path="/Weather" component={Weather} />
 					<Route path="/Currancy" component={Currancy} />
        </div>

        {/* <footer>
          <div id="footer">
            <div className="container">
              <div className="row row-bottom-padded-md">
                <div className="col-md-6 col-md-offset-3 text-center">
                  <p className="fh5co-social-icons">
                    <a>
                      <i className="icon-twitter2" />
                    </a>
                    <a>
                      <i className="icon-facebook2" />
                    </a>
                    <a>
                      <i className="icon-instagram" />
                    </a>
                    <a>
                      <i className="icon-dribbble2" />
                    </a>
                    <a>
                      <i className="icon-youtube" />
                    </a>
                  </p>
                  <p>
                    Copyright 2019 Phoenix. All Rights
                    Reserved. Made with <i className="icon-heart3" /> by{" "}
                    The Four Musketeers
                    {" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer> */}
      </BrowserRouter>
    );
  }

}
export default App;
