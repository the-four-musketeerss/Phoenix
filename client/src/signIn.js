import React from 'react';
import './signIn.css';
import { Route, Redirect } from 'react-router'

class SignIn extends React.Component{
    constructor(props){
          super(props);
        this.state = {			
          email :'',
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
      fetch("/post", {
        method: "GET",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      }).then((response) => response.json())
      .then((data)=>{
        console.log(data)
        // const token = data.token
        // localStorage.setItem('token', token);
             for (var i = 0 ; i < data.length ; i++ ){
          if ( that.state.email === data[i].email){
            if (that.state.password === data[i].password){
              that.setState({
                email:'',
                password:'',
                toggleSignIn: true,
                allData : data
              });
            }
            }
        }
        // for(var i = 0 ; i < data.length ; i++){
        //   console.log(data[i].email , that.state.email)
        //   if(that.state.email === data[i].email){
        //  console.log("correct")
        //   if(that.state.password === data[i].password){
        //   that.setState({
        //   email:'',				
        //   password:'',
        //   toggleSignIn: true,
        //   alldata : data
        // })
        // }
        // }
        // }
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
          <Redirect to="/Mainprofile" 
          alldata ={this.state.alldata}
           />
				)}
			</div>
    )}
  }
  export default SignIn;





