import React from 'react';
import './mainprofile.css';


class Mainprofile extends React.Component{
    constructor(props){
          super(props);
        this.state = {			
            image:"",
            Bio:""
        }
    }
    yourdata(event){
        this.setState({ [event.target.name]: event.target.value });
     }
    server(){
      var that = this
      fetch("signIn/", {
        method: "post",
        headers : {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.state)
      }).then((response) => response.json())
      .then((data)=>{
        
      })
    }
  
     render(){
      return(<div id="div">
            <input  type="text" name = "image" onChange ={this.yourdata.bind(this)} placeholder="your image" required/> <br />
            <input  type="text" name = "Bio" onChange ={this.yourdata.bind(this)} placeholder="your Bio" required/> <br />
            <button id="button" onClick={this.server.bind(this)}>Click  to Submit</button>
        </div>
    )}
  }
  export default Mainprofile;