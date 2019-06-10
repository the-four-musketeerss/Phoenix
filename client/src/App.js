import React from 'react';
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
         email:"ahhhhaam@gmail.com",
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
    return(<div id="div">
          <input  type="text" onChange ={this.yourname.bind(this)} placeholder="your name" required/> <br />
          <button id="button" onClick={this.server.bind(this)}>Click  to Submit</button>
      </div>
  )}
}

export default App;
