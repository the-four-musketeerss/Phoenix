import React from 'react';
import './signUp.css';
import SignIn from './signIn.js';
import { Route, Redirect } from 'react-router'
  class SignUp extends React.Component{
    constructor(props){
          super(props);
        this.state = {
          username:'',				
          email:'',
          password:'',
          toggleSignIn: false

        }
    }
    yourdata(event){
        this.setState({ [event.target.name]: event.target.value });
     }
    server(){
      const token = localStorage.getItem('token');
      var that = this;
      fetch("auth/signUp", {
        method: "POST",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then((response) => response.json())
      .then((data)=>{
        console.log(data.token)
        const token = data.token
        localStorage.setItem('token', token);
        that.setState({
          username:'',				
          email:'',
          password:'',
          toggleSignIn: true
        })
       
      })
    }
  
     render(){
      return(<div id="div">
        {!this.state.toggleSignIn ? (
          <div>
            <input  type="text" name = "username" onChange ={this.yourdata.bind(this)} placeholder="your username" required/> <br />
            <input  type="text" name = "email" onChange ={this.yourdata.bind(this)} placeholder="your email" required/> <br />
            <input  type="password" name = "password" onChange ={this.yourdata.bind(this)} placeholder="your password" required/> <br />
            <button id="button" onClick={this.server.bind(this)}>Click  to Submit</button>
            </div>
				) : (
          <Redirect to="/mainprofile"/>
				)}
			</div>
        
    )}
  }
  
  export default SignUp;








