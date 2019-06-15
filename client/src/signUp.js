//     // npm i firebase
//     //yarn add firebase   
import React from 'react';
import './signUp.css';
import SignIn from './signIn.js';
import { Route, Redirect } from 'react-router'
import { storage } from './firebase';
import Mainprofile from './mainprofile.js';

  class SignUp extends React.Component{
     constructor(props){
          super(props);
        this.state = {
          username:'',        
          email:'',
          password:'',
          image:null,
          bio:"",
          url:"",
          toggleSignIn: false,
          id:""
        }
   this.handleChange = this.handleChange.bind(this);

    }

  handleChange(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  }


    handleUpload() {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
     uploadTask.on(
      `state_changed`,
      (snapshot) => {
      },
      (error) => {},
      () => {
        storage.ref(`images`).child(image.name).getDownloadURL().then((url) => {
          console.log(url);
          this.setState({ url });
        });
      }
    );
  }

     yourdata(event){
        this.setState({[event.target.name]: event.target.value });
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
        body: JSON.stringify({"username":this.state.username,
        "email": this.state.email,
        "password" : this.state.password})
      }).then((response) => response.json())
      .then((data)=>{
        console.log(data.token)
        const token = data.token
        console.log(data.user)
        localStorage.setItem('token', token);
        that.setState({
       toggleSignIn: true,
       email:data.user.email
        },() => {
          console.log("hi")
              that.signUp(that);
            })
       
      })
    }

    signUp(that) {
      fetch("post/", {
        method: "POST",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({"username":this.state.username,
        "email": this.state.email,
        "password" : this.state.password,
        "bio" : this.state.bio,
        "url": this.state.url
        } 
        )
      }).then((response) => response.json())
      .then((data)=>{
        console.log(data)
        const token = data.token
        localStorage.setItem('token', token);     
          for (var i = 0 ; i < data.length ; i++ ){
          if ( that.state.email === data[i].email){
            if (that.state.password === data[i].password){

              that.setState({
                toggleSignIn: true,
                id:data[i].id
              }
              );
            }
            }
        }
      })
      }




     render(){
      return(<div id="div">
        {!this.state.toggleSignIn ? (
          <div>
          <input type="file" name="image" onChange={this.handleChange} />
            <button onClick={this.handleUpload.bind(this)} className="Button">
              Upload
            </button>
          <img
              src={
                this.state.url ||
                'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435'
              }
              alt="uploaded image"
              height="150"
              width="200"
            />
            <input  type="text" name = "bio" onChange ={this.yourdata.bind(this)} placeholder="your bio" required/> <br />
            <input  type="text" name = "username" onChange ={this.yourdata.bind(this)} placeholder="your username" required/> <br />
            <input  type="text" name = "email" onChange ={this.yourdata.bind(this)} placeholder="your email" required/> <br />
            <input  type="password" name = "password" onChange ={this.yourdata.bind(this)} placeholder="your password" required/> <br />
            <button id="button" onClick={this.server.bind(this)}>Click  to Submit</button>
            </div>

        ) : (
          <Mainprofile              
            username = {this.state.username} 
			    	email={this.state.email}
            bio={this.state.bio}
            url={this.state.url}
            id={this.state.id}  
            Redirect to="/mainprofile"
          />
        )}
      </div>
        
    )}
  }
  
  export default SignUp;




