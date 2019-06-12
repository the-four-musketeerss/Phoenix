import React from 'react';
import './mainprofile.css';


class Mainprofile extends React.Component{
    constructor(props){
          super(props);
        this.state = {			
          data:[],
        
        }
    }
    yourdata(event){
        this.setState({ [event.target.name]: event.target.value });
     }
    server(){
      var that = this
      fetch("signIn/", {
        method: "get",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then((response) => response.json())
      .then((data)=>{
        for (var i = 0 ; i < data.length ; i++ ){
          if ( that.state.email === data[i].email){
            if (that.state.password === data[i].password){
              
            }
            }
        }
        
      })
    }
  
     render(){
      return(<div id="div">
            <input  type="text" name = "password" onChange ={this.yourdata.bind(this)} placeholder="your password" required/> <br />
            <button id="button" onClick={this.server.bind(this)}>Click  to Submit</button>
        </div>
    )}
  }
  export default Mainprofile;