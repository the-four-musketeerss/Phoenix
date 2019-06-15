//     // npm i firebase
//     //yarn add firebase   
import React from 'react';
import './signUp.css';
import SignIn from './signIn.js';
import { Route, Redirect } from 'react-router'
import { storage } from './firebase';

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
          alldata:[],
          toggleSignIn: false
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
        },() => {
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
        body: JSON.stringify(this.state)
      }).then((response) => response.json())
      .then((data)=>{
        console.log(data)
        // console.log(data.token)
        // const token = data.token
        // localStorage.setItem('token', token);     
          for (var i = 0 ; i < data.length ; i++ ){
          if ( that.state.email === data[i].email){
            if (that.state.password === data[i].password){
              console.log(data)
              that.setState({
                username:'',        
                email:'',
                password:'',
                toggleSignIn: true,
                bio:"",
                image:null,
                url: "",
                alldata:data[i]
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
           <input  type="text" name = "image" onChange ={this.yourdata.bind(this)} placeholder="your username" required/> <br />
            <input  type="text" name = "bio" onChange ={this.yourdata.bind(this)} placeholder="your bio" required/> <br />
            <input  type="text" name = "username" onChange ={this.yourdata.bind(this)} placeholder="your username" required/> <br />
            <input  type="text" name = "email" onChange ={this.yourdata.bind(this)} placeholder="your email" required/> <br />
            <input  type="password" name = "password" onChange ={this.yourdata.bind(this)} placeholder="your password" required/> <br />
            <button id="button" onClick={this.server.bind(this)}>Click  to Submit</button>
            </div>
        ) : (
          <Redirect to="/mainprofile" data = {this.state.allData} />
        )}
      </div>
        
    )}
  }
  
  export default SignUp;



//    // npm i firebase
//     //yarn add firebase   
// import React from 'react';
// import './signUp.css';
// import SignIn from './signIn.js';
// import { Route, Redirect } from 'react-router'
// import { storage } from '../firebase';

//   class SignUp extends React.Component{
//      constructor(props){
//           super(props);
//         this.state = {
//           username:'',        
//           email:'',
//           password:'',
//           image:null,
//           Bio:"",
//           url:"",
//           toggleSignIn: false
//         }
//    this.handleChange = this.handleChange.bind(this);

//     }

//   handleChange(e) {
//     if (e.target.files[0]) {
//       const image = e.target.files[0];
//       this.setState(() => ({ image }));
//     }
//   }


//       handleUpload() {
//     const { image } = this.state;
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       `state_changed`,
//       (snapshot) => {
//       },
//       (error) => {},
//       () => {
//         storage.ref(`images`).child(image.name).getDownloadURL().then((url) => {
//           console.log(url);
//           this.setState({ url });
//         });
//       }
//     );
//   }

//      yourdata(event){
//         this.setState({ [event.target.name]: event.target.value });
//      }
//     server(){
//       const token = localStorage.getItem('token');
//       var that = this;
//       fetch("auth/signUp", {
//         method: "POST",
//         headers : {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(this.state)
//       }).then((response) => response.json())
//       .then((data)=>{
//         console.log(data.token)
//         const token = data.token
//         localStorage.setItem('token', token);
//         that.setState({
//         },() => {
//               that.signUp(that);
//             })
       
//       })
//     }


//   signUp(that) {
//       fetch("post/", {
//         method: "POST",
//         headers : {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(this.state)
//       }).then((response) => response.json())
//       .then((data)=>{
//         console.log(data)
//         // console.log(data.token)
//         // const token = data.token
//         // localStorage.setItem('token', token);     
//           for (var i = 0 ; i < data.length ; i++ ){
//           if ( that.state.email === data[i].email){
//             if (that.state.password === data[i].password){
//               console.log(data)
//               that.setState({
//                 username:'',        
//                 email:'',
//                 password:'',
//                 toggleSignIn: true,
//                 bio:"",
//                 image:null,
//                 url: "",
//                 alldata:data[i]
//               });
//             }
//             }
//         }
//       })
//       }

  
//      render(){
//       return(
//       <div id="div">
//         {!this.state.toggleSignIn ? (
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Sign Up Form by Colorlib</title>

//     <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">

//     <link rel="stylesheet" href="css/style.css">
// </head>
// <body>

//     <div class="main">

//         <section class="signup">
//             <div class="container">
//                 <div class="signup-content">
//                     <div class="signup-form">
//                         <h2 class="form-title">Sign up</h2>
//                         <form method="POST" class="register-form" id="register-form">
//                             <div class="form-group">
//                                 <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
//                                 <input type="text" name = "username" id = "name" onChange ={this.yourdata.bind(this)} placeholder="your username" required/>
//                             </div>
//                             <div class="form-group">
//                                 <label for="email"><i class="zmdi zmdi-email"></i></label>
//                                 <input type="email" name="email" onChange ={this.yourdata.bind(this)} id="email" placeholder="Your Email" required/>
//                             </div>
//                             <div class="form-group">
//                                 <label for="pass"><i class="zmdi zmdi-lock"></i></label>
//                                 <input type="password" name = "password" id="pass" onChange ={this.yourdata.bind(this)} placeholder="your password" required/>
//                             </div>
//                             <div class="form-group">
//                                 <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
//                                 <input type="text" name="Bio" id="re_pass" onChange ={this.yourdata.bind(this)} placeholder="your Bio"/>
//                             </div>
//                             <div class="form-group">
//                                 <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
//                                 <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
//                             </div>
//                             <input type="file" name="image" onChange={this.handleChange} />
//                              <button onClick={this.handleUpload.bind(this)} className="Button">
//                               Upload
//                            </button>
//                             <div class="form-group form-button">
//                                 <input type="submit" name="signup" id="signup" class="form-submit" onClick={this.server.bind(this)} value="Register"/>
//                             </div>
                   
//                        </form>
//                     </div>
//                     <div class="signup-image">
//                         <figure><img 
//                         src= {this.state.url || "images/signup-image.jpg"} alt="sing up image"></figure>
//                         <a href="#" class="signup-image-link">I am already member</a>
//                     </div>
//                 </div>
//             </div>
//         </section>
        
//   ) : (
//          <Redirect to="/mainprofile" data = {this.state.allData} />
//        )}
//      </div>
        
//    )}
//  }
  
//  export default SignUp;
