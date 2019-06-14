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
           <h1>This Is Profile Page  </h1>
           <img src={this.props.location.state.newbook.image} /><br />
           <h4> UserId :{this.props.location.state.newbook.UserId}</h4>
           <h4>Country :{this.props.location.state.newbook.country}</h4>
           <h4>Blogs : {this.props.location.state.newbook.Blog}</h4>
        </div>
    )}
  }
  
  export default Profile;
  