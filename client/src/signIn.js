import React from 'react';
import './signIn.css';
import { Route, Redirect } from 'react-router'
import Mainprofile from './mainprofile.js';

class SignIn extends React.Component{
    constructor(props){
          super(props);
        this.state = {			
          email :'',
          password:'',
          username:"",
          url:"",
          bio:"",
          toggleSignIn: false
        }
    }
    yourdata(event){
        this.setState({ [event.target.name]: event.target.value });
     }    
    server(){
      const token = localStorage.getItem('token');
      var that = this;
      fetch("/post", {
        method: "GET",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      }).then((response) => response.json())
      .then((data)=>{
        console.log(data[1])
        // const token = data.token
        // localStorage.setItem('token', token);
             for (var i = 0 ; i < data.length ; i++ ){
          if ( that.state.email === data[i].email){
            if (that.state.password === data[i].password){
              that.setState({
                email:data[i].email,
                password:'',
                toggleSignIn: true,
                username:data[i].username,
                url:data[i].url,
                bio:data[i].bio,
                
              });
            }
            }
        }


      })
    }
  
     render(){
      return(<div id="div">
         {!this.state.toggleSignIn ? (
          <div>
            <input  type="text" name = "email" onChange ={this.yourdata.bind(this)} placeholder="your email" required/> <br />
            <input  type="text" name = "password" onChange ={this.yourdata.bind(this)} placeholder="your password" required/> <br />
            <button id="button" onClick={this.server.bind(this)}>Click  to Submit</button>
        </div>
        ) : (
         <Mainprofile              
            username = {this.state.username} 
			    	email={this.state.email}
            bio={this.state.bio}
					  url={this.state.url}  
            Redirect to="/mainprofile"
          />
				)}
			</div>
    )}
  }
  export default SignIn;





