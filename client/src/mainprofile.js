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
     var that =  this
      const token = localStorage.getItem('token');
      fetch('auth/user', {
        method: "get",
       headers: {'x-access-token': token }
      }).then(function(response) {
            if (response.status == 200) {
                response.json().then((body) => {
                     console.log(body);
                    // that.setState({
      
                    // }
                    // )
                    console.log(that.state);
                    
                });
            } else {
                response.then(() => {
                    console.log("err")
                });
            }
        });
    }
     render(){
      return(<div id="div">
           {/* <h1>{this.props.alldata}<h1> */}
           {/* <h1>{this.props.alldata}<h1> */}
           <h1>main page</h1>
        </div>
    )}
  }
  export default Mainprofile;