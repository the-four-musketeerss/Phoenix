import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Blogs from './components/Blogs'
import Hotels from './components/Hotels'
import Profile from './components/Profile'
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
		super(props);
      this.state = {
      
      }
  }
 
   render(){
    return(<div>
        <Router>
          <Route exact path="/Hotels" component={Hotels}/>
          <Route exact path="/Blogs" component={Blogs} />
          <Route exact path="/Profile" component={Profile} />
        </Router>
      </div>
  )}
}

export default App;
