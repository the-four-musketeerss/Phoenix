import React from 'react';
import './mainprofile.css';
import { NavLink }  from 'react-router-dom';
import SignUp from './signUp.js';
import SignIn from './signIn.js';


class Mainprofile extends React.Component{
   constructor(props){
         super(props);
       this.state = {            

       }
   }


   // componentDidMount(){
   //     var that =  this
   //     const token = localStorage.getItem('token');
   //     fetch('/workerMainPage', {
   //         method: 'get',
   //         headers: {'x-access-token': token }
   //     }).then(function(response) {
   //         if (response.status == 200) {
   //             response.json().then((body) => {
   //                  console.log(body);
   //                 that.setState({
   //                     data : body
   //                 }
   //                 )
   //                 console.log(that.state);

   //             });
   //         } else {
   //             response.then(() => {
   //                 console.log("err")
   //             });
   //         }
   //     });
   // }

   // yourdata(event){
   //     this.setState({ [event.target.name]: event.target.value });
   //  }


    render(){
     return(<div id="div">
            <h1>{this.props.bio}</h1>

           <NavLink to="/addblogs" activeStyle={{ color: 'red' }}>
               <button id="button" >Add Bloges</button>
           </NavLink>
           <br/>
             <NavLink to="./Component/Bloges" activeStyle={{ color: 'red' }}>
               <button id="button" >See Bloges</button>
           </NavLink>
       </div>
   )}
 }


 export default Mainprofile;