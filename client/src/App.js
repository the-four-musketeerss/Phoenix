
import React from 'react';

import { BrowserRouter , Router, Route } from "react-router-dom";
import { NavLink }  from 'react-router-dom';
import Blogs from './components/Blogs'
import Hotels from './components/Hotels'
import Profile from './components/Profile'
import Flights from './components/Flights'
import './App.css';
import SignUp from './signUp.js';
import SignIn from './signIn.js';
import Mainprofile from './mainprofile.js';



class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route
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
					<Route exact path="/Hotels" component={Hotels}/>
         			<Route exact path="/Blogs" component={Blogs} />
        			<Route exact path="/Profile" component={Profile} />
					<Route path="/Mainprofile" component={Mainprofile} />
					<Route path="/SignIn" component={SignIn} />
					<Route path="/SignUp" component={SignUp} />
					<Route path="/flights" component={Flights} />

				</div>
			</BrowserRouter>
		);
	}
}
export default App;
