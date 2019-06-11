import React from 'react';
import './signIn.css';


class SignIn extends React.Component{
    constructor(props){
          super(props);
        this.state = {			
          email:'',
          password:''
        
        }
    }
    yourdata(event){
        this.setState({ [event.target.name]: event.target.value });
     }
    server(){
      fetch("signIn/", {
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
            <input  type="text" name = "email" onChange ={this.yourdata.bind(this)} placeholder="your email" required/> <br />
            <input  type="text" name = "password" onChange ={this.yourdata.bind(this)} placeholder="your password" required/> <br />
            <button id="button" onClick={this.server.bind(this)}>Click  to Submit</button>
        </div>
    )}
  }
  export default SignIn;





