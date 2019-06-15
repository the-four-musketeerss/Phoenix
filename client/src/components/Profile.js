import React from 'react';
import { browserHistory } from 'react-router';

class Profile extends React.Component{ 
    constructor(props){
          super(props);
        this.state = {
        }
    }
  
 
  
     render(){
      return(<div>
          
           <img class = "rounded" src={this.props.location.state.newbook.image} style={{height:"500px",width:"100%"}}/><br />
           <h4> UserId :{this.props.location.state.newbook.UserId}</h4>
           <h4>Country :{this.props.location.state.newbook.country}</h4>
           <h4>Blogs : {this.props.location.state.newbook.Blog}</h4>
        </div>
    )}
  }
  
  export default Profile;
  