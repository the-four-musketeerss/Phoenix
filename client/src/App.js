
import React from 'react';

import { BrowserRouter , Router, Route } from "react-router-dom";
import { NavLink }  from 'react-router-dom';
import HomePage from "./components/HomePage";
import Blogs from './components/Blogs'
import Hotels from './components/Hotels'
import Profile from './components/Profile'
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
           <Route exact path="/" component={HomePage} />
					<Route exact path="/Hotels" component={Hotels}/>
         			<Route exact path="/Blogs" component={Blogs} />
        			<Route exact path="/Profile" component={Profile} />
					<Route path="/Mainprofile" component={Mainprofile} />
					<Route path="/SignIn" component={SignIn} />
					<Route path="/SignUp" component={SignUp} />
				</div>
			</BrowserRouter>
		);
	}
}
export default App;
