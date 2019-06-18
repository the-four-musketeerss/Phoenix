import React from 'react';
import './mainprofile.css';
import { NavLink }  from 'react-router-dom';
import SignUp from './signUp.js';
import SignIn from './signIn.js';
import Blogs from './components/Blogs.js';
import { storage } from './firebase';
import { Route, Redirect } from 'react-router'


class Mainprofile extends React.Component{
   constructor(props){
         super(props);
       this.state = {            
        status : false,
        Blog:"",
        country:"",
        title:"",
        id:"",
        image:null,
        urlimg:"",
        text:"",
        blogs:[]
       }
        this.handleChange = this.handleChange.bind(this);

   }


  


   componentDidMount(){
        var that = this;
      fetch("/post", {
        method: "GET",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      }).then((response) => response.json())
      .then((data)=>{
        // const token = data.token
        // localStorage.setItem('token', token);
          for (var i = 0 ; i < data.length ; i++ ){
          if ( that.props.username === data[i].username){
             console.log(data[i].id)

         this.setState({id: data[i].id });
            }
        }


      })
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
        storage.ref(`images`).child(image.name).getDownloadURL().then(( urlimg) => {
          console.log( urlimg);
          this.setState({ urlimg });
        });
      }
    );
  }

   yourdata(event){
        this.setState({[event.target.name]: event.target.value });
     }
   server(){
      // const token = localStorage.getItem('token');
      var that = this;
      fetch("blogs/", {
        method: "POST",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
       "ProfileId":this.state.id,
        "Blog" : this.state.Blog,
        "country" : this.state.country,
        "title": this.state.title ,
        "image":this.state.urlimg     
          } 
        )
      }).then((response) => response.json())
      .then((data)=>{
        this.setState({text:"your blog is uptodate" 
        })
            })
    }




       blog(){
      // const token = localStorage.getItem('token');
      var that = this;
      fetch("blogs/", {
        method: "GET",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then((response) => response.json())
      .then((data)=>{
        var arr = []
        for(var i = 0 ; i < data.length ; i++ ){
        
          if(this.state.id == data[i].ProfileId){
          arr.push(data[i])
        }
        }
        console.log(arr)

        that.setState({
        blogs:arr
        })
            })
    }


   // componentDidMount(){
   //     var that =  this
   //     const token = localStorage.getItem('token');
   //     fetch('/workerMainPage', {
   //         method: 'get',
   //         headers: {'Authorization': token }
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

click(){
  this.setState({
        status : true
  })
}





    render(){
     return(<div id="div">
     <div>
            <img id = "a"
              src={
                this.props.url ||
                'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435'
              }
             alt="uploaded image"
            />
             <br/>
            <br/>
            <br/>
            <input type="file" name="image" onChange={this.handleChange} />
       <button onClick={this.handleUpload.bind(this)} className="Button">
            Upload
       </button>
            <br/>
            <br/>
            <br/>
          <h1>add Bloges</h1>
           <br/>
            <br/>
            <br/>
         <img 
              src={
                this.state.urlimg ||
                'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435'
              }
             alt="uploaded image"
            />
            <br/>
            <br/>
            <br/>
            <h1>{this.props.bio}</h1>
            <h1>{this.props.username}</h1>
            <h1>{this.props.email}</h1>
            	<input
							type="text"
							name="Blog"
							placeholder="Blog"
							onChange={this.yourdata.bind(this)}
						/>
            	<input
							type="text"
							name="title"
							placeholder="title"
							onChange={this.yourdata.bind(this)}
						/>
            	<input
							type="text"
							name="country"
							placeholder="country"
							onChange={this.yourdata.bind(this)}
						/>
            <button className="Button" onClick={this.server.bind(this)}>
							send
						</button>
            {this.state.text}
           <br/>
           <br/>
               <button id="button"  onClick={this.click.bind(this)} >See Bloges</button>
          <br/>
          <br/>
              <button id="button"  onClick={this.blog.bind(this)} >my Bloges</button>
          <br/>
          <br/>
              <table>
						<tbody>
							{this.state.blogs.map((blog, i) => (
								<tr
									key={blog.id}
									style={{
										margin: '10px',
										display: 'block',
										color: 'white',
										fontSize: '20px',
										borderStyle: 'solid',
										padding: '15px'
									}}
								>
									<td style={{ color: 'orange', fontSize: '18px' }}>
										<strong>Blog title:</strong>
									</td>
									<td>{blog.title}</td>
									<td style={{ color: 'orange', fontSize: '18px' }}>
										<strong>country:</strong>
									</td>
									<td>{blog.country}</td>
									<td style={{ color: 'orange', fontSize: '18px' }}>
										<strong>Blog</strong>
									</td>
									<td>{blog.Blog}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}



   </div>
   

       </div>
   )}
 }





 export default Mainprofile;