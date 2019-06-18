
import React from 'react';
import { BrowserRouter , Router, Route } from "react-router-dom";
import { NavLink }  from 'react-router-dom';
import HomePage from "./components/HomePage";
import Blogs from './components/Blogs'
import Hotels from './components/Hotels'
import Profile from './components/Profile'
import Flights from './components/Flights'
import SignUp from './signUp.js';
import SignIn from './signIn.js';
import Mainprofile from './mainprofile.js';
import Prof from './Prof.js';
import Weather from './weather.js';



class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>

					 <header id="fh5co-header-section" className="sticky-banner">
        <div className="container">
          <div className="nav-header">
            <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></a>
            <h1 id="fh5co-logo"><a href="index.html"><i ><img src="https://phoenixpwn.com/phoenix.png"/></i>Phoenix</a></h1>
            <nav id="fh5co-menu-wrap" role="navigation">
              <ul className="sf-menu" id="fh5co-primary-menu">
                <li className="active"><NavLink to="/">
									Home
								</NavLink></li>
                <li><NavLink to="/flights">
									Flights
								</NavLink></li>
                <li><NavLink to="/Hotels">
									Hotels
								</NavLink></li>
                <li><NavLink to="/Blogs" >
									Blogs
								</NavLink></li>
                <li><NavLink to="/SignIn" >
									Sign In
								</NavLink></li>
                <li><NavLink to="/SignUp" >
					Sign Up
					</NavLink></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
				 	{/* <Route
						exact
						path="/"
						render={() => (
							<div>
								<NavLink to="/" >
									<h2>Home</h2>
								</NavLink>
							</div>
						)}
					/>
          	<Route
						exact
						path="/"
						render={() => (
							<div>
					<NavLink to="/SignUp" >
					go to sign up
					</NavLink>
          	</div>
						)}
					/>
					<Route
						exact
						path="/"
						render={() => (
							<div>
								<NavLink to="/SignIn" activeStyle={{ color: 'red' }}>
									sign In
								</NavLink>
							</div>
						)}
					/>
						)} */}
					{/* /> */}
					
                    <Route exact path="/" component={HomePage} />
					<Route exact path="/Hotels" component={Hotels}/>
         	<Route exact path="/Blogs" component={Blogs} />
        	<Route exact path="/Profile" component={Profile} />
					<Route path="/Mainprofile" component={Mainprofile} />
					<Route path="/SignIn" component={SignIn} />
					<Route path="/SignUp" component={SignUp} />
					<Route path="/flights" component={Flights} />
 					<Route path="/Prof" component={Prof} />
 					<Route path="/Weather" component={Weather} />

           


				</div>

				{/* <footer>
        <div id="footer">
          <div className="container">
            <div className="row row-bottom-padded-md">
              <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                <h3>About Travel</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                <h3>Top Flights Routes</h3>
                <ul>
                  <li><a href="#">Manila flights</a></li>
                  <li><a href="#">Dubai flights</a></li>
                  <li><a href="#">Bangkok flights</a></li>
                  <li><a href="#">Tokyo Flight</a></li>
                  <li><a href="#">New York Flights</a></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                <h3>Top Hotels</h3>
                <ul>
                  <li><a href="#">Boracay Hotel</a></li>
                  <li><a href="#">Dubai Hotel</a></li>
                  <li><a href="#">Singapore Hotel</a></li>
                  <li><a href="#">Manila Hotel</a></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                <h3>Interest</h3>
                <ul>
                  <li><a href="#">Beaches</a></li>
                  <li><a href="#">Family Travel</a></li>
                  <li><a href="#">Budget Travel</a></li>
                  <li><a href="#">Food &amp; Drink</a></li>
                  <li><a href="#">Honeymoon and Romance</a></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                <h3>Best Places</h3>
                <ul>
                  <li><a href="#">Boracay Beach</a></li>
                  <li><a href="#">Dubai</a></li>
                  <li><a href="#">Singapore</a></li>
                  <li><a href="#">Hongkong</a></li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                <h3>Affordable</h3>
                <ul>
                  <li><a href="#">Food &amp; Drink</a></li>
                  <li><a href="#">Fare Flights</a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-center">
                <p className="fh5co-social-icons">
                  <a href="#"><i className="icon-twitter2"></i></a>
                  <a href="#"><i className="icon-facebook2"></i></a>
                  <a href="#"><i className="icon-instagram"></i></a>
                  <a href="#"><i className="icon-dribbble2"></i></a>
                  <a href="#"><i className="icon-youtube"></i></a>
                </p>
                <p>Copyright 2016 Free Html5 <a href="#">Module</a>. All Rights Reserved. Made with <i className="icon-heart3"></i> by <a href="http://freehtml5.co/" target="_blank">Freehtml5.co</a> / Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash</a></p>
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
