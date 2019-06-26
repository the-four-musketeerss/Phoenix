
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
import Checklist from './components/Checklist';
import ScrollUpButton from "react-scroll-up-button";



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
                    <a href="/">Home</a>
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
          <ScrollUpButton />
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
           <Route path="/TravelList" component={Checklist} />
        </div>

        <footer>
          <div>
            <div>
              
              <div>
                <div  style={{backgroundColor:"#212F3D",marginTop:'75px',height: '500px',textAlign: 'center', clear: 'both',position: 'relative', left: '0',bottom: '0', width: '100%'}} >
                  <div style={{position:'absolute',textAlign: 'center', clear: 'both',left: '0',bottom: '30', width: '100%'}}>
                  <div class="container">
                  <div class="row row-bottom-padded-md">
                <div style={{marginTop:"140px"}}>
                  <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                    <h3 style={{color:'white',fontSize:'25px'}}>About Travel</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia , there live the blind texts.</p>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                    <h3 style={{color:'white',fontSize:'25px'}}>Top Flights</h3>
                    <ul>
                      <li>Manila flights</li>
                      <li>Dubai flights</li>
                      <li>Bangkok flights</li>
                      <li>Tokyo Flight</li>
                      <li>New York Flights</li>
                    </ul>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                    <h3 style={{color:'white',fontSize:'25px'}}>Top Hotels</h3>
                    <ul>
                      <li>Boracay Hotel</li>
                      <li>Dubai Hotel</li>
                      <li>Singapore Hotel</li>
                      <li>Manila Hotel</li>
                    </ul>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                    <h3 style={{color:'white',fontSize:'25px'}}>Interest</h3>
                    <ul>
                      <li>Beaches</li>
                      <li>Family Travel</li>
                      <li>Food &amp; Drink</li>
                      <li>Honeymoon and Romance</li>
                    </ul>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                    <h3 style={{color:'white',fontSize:'25px'}}>Best Places</h3>
                    <ul>
                      <li>Boracay Beach</li>
                      <li>Dubai</li>
                      <li>Singapore</li>
                      <li>Hongkong</li>
                    </ul>
                  </div>
                  <div class="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                    <h3 style={{color:'white',fontSize:'25px'}}>Affordable</h3>
                    <ul>
                      <li>Food &amp; Drink</li>
                      <li>Fare Flights</li>
                    </ul>
                  </div>
                  </div>
                  <div style={{marginTop:'120px',margin:'0 auto'}}>
                  <p className="fh5co-social-icons" >
                    <a href= '#'>
                      <i className="icon-twitter2" />
                    </a>
                    <a href= '#'>
                      <i className="icon-facebook2" />
                    </a>
                    <a href= '#'>
                      <i className="icon-instagram" />
                    </a>
                    <a href= '#'>
                      <i className="icon-dribbble2" />
                    </a>
                    <a href= '#'>
                      <i className="icon-youtube" />
                    </a>
                  </p>
                  <p style={{color:'white'}}>
                    Copyright 2019 Phoenix. All Rights
                    Reserved. Made with <i className="icon-heart3" /> by{" "}
                    PHOENIX Team
                    {" "}
                  </p>
                  </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    );
  }

}
export default App;
// id="footer"
// className="row row-bottom-padded-md"