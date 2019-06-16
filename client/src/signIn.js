import React from 'react';
import './signIn.css';
import { Route, Redirect } from 'react-router'
import Mainprofile from './mainprofile.js';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class SignIn extends React.Component{
    constructor(props){
          super(props);
        this.state = {			
          email :'',
          password:'',
          username:"",
          url:"",
          bio:"",
          toggleSignIn: false,
          id:""
        }
    }
    yourdata(event){
        this.setState({ [event.target.name]: event.target.value });
     }    
    server(){
      // const token = localStorage.getItem('token');
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
                id:data[i].id

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
          <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
               onChange ={this.yourdata.bind(this)}
                name = "email"
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                name = "password"
                onChange ={this.yourdata.bind(this)}
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn
              onClick={this.server.bind(this)}
              >Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
           </div>
        ) : (
          <Mainprofile              
            username = {this.state.username} 
			    	email={this.state.email}
            bio={this.state.bio}
					  url={this.state.url}  
            id = {this.state.id}  
            Redirect to="/mainprofile"
          />
				)}
			</div>
    )}
  }
  export default SignIn;






