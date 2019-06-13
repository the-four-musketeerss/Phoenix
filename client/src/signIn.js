import React from 'react';
import './signIn.css';
import { Route, Redirect } from 'react-router'

class SignIn extends React.Component{
    constructor(props){
          super(props);
        this.state = {			
          username :'',
          password:'',
          toggleSignIn: false,
          alldata :[]
        }
    }
    yourdata(event){
        this.setState({ [event.target.name]: event.target.value });
     }    
    server(){
      const token = localStorage.getItem('token');
      var that = this;
      fetch("auth/signIn", {
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
          password:'',
          toggleSignIn: true,
          alldata : data.user
        })
       
      })
    }
  
     render(){
      return(<div id="div">
         {!this.state.toggleSignIn ? (
          <div>
            <input  type="text" name = "username" onChange ={this.yourdata.bind(this)} placeholder="your username" required/> <br />
            <input  type="text" name = "password" onChange ={this.yourdata.bind(this)} placeholder="your password" required/> <br />
            <button id="button" onClick={this.server.bind(this)}>Click  to Submit</button>
        </div>
        ) : (
          <Redirect to="/Mainprofile" 
          alldata ={this.state.alldata}
           />
				)}
			</div>
    )}
  }
  export default SignIn;





