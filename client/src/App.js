import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Blogs from './components/Blogs'
import Hotels from './components/Hotels'
import Flights from './components/Flights'
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component{
  constructor(props){
		super(props);
      this.state = {
        name:'',				
        email:'',
        password:'',
        image:'',
        Bio:''
      }
  }
  yourname(event){
    this.setState({
         name:event.target.value,
         email:"lina@gmail.com",
         password:"1213111",
         image:"ni2s4ce image",
         Bio:"heql3lo ahlam nice"
       });
   }
  server(){
    fetch("profile/", {
      method: "POST",
      headers : {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then((res)=>{
      console.log('hello from fetch')
    })
  }

   render(){
    return(<div>
        <Router>
          <Route  exact path="/" component={Hotels}/>
          <Route exact path="/Blogs" component={Blogs} />
          <Route exact path="/Flights" component={Flights} />
        </Router>
      </div>
  )}
}

export default App;
