import React from 'react';
import './signUp.css';
import SignIn from './signIn.js';
import { Route, Redirect } from 'react-router'
  class SignUp extends React.Component{
    constructor(props){
          super(props);
        this.state = {
          name:'',				
          email:'',
          password:'',
          image:'',
          Bio:'',
          toggleSignIn: false

        }
    }
    yourdata(event){
        this.setState({ [event.target.name]: event.target.value });
     }
    server(){
      var that = this;
      fetch("signUp/", {
        method: "POST",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then((res)=>{
        // Redirect to="/dashboard"
        that.setState({
          name:'',				
          email:'',
          password:'',
          image:'',
          Bio:'',
          toggleSignIn: true
        });
       
      })
    }
  
     render(){
      return(<div id="div">
        {!this.state.toggleSignIn ? (
          <div>
            <input  type="text" name = "name" onChange ={this.yourdata.bind(this)} placeholder="your name" required/> <br />
            <input  type="text" name = "email" onChange ={this.yourdata.bind(this)} placeholder="your email" required/> <br />
            <input  type="text" name = "password" onChange ={this.yourdata.bind(this)} placeholder="your password" required/> <br />
            <input  type="text" name = "image" onChange ={this.yourdata.bind(this)} placeholder="your image" required/> <br />
            <input  type="text" name = "Bio" onChange ={this.yourdata.bind(this)} placeholder="your Bio" required/> <br />
            <button id="button" onClick={this.server.bind(this)}>Click  to Submit</button>
            </div>
				) : (
          <Redirect to="/SignIn"/>
				)}
			</div>
        
    )}
  }
  
  export default SignUp;








