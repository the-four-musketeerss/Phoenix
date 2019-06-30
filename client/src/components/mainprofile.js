// import React from 'react';
import React, { Component } from "react";
import Blogs from "./Blogs.js";
import { storage } from "./firebase";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import { Route, Redirect } from "react-router";
import "./mainProfile.css"
import Modal from 'react-awesome-modal';
import { StylesProvider } from "@material-ui/styles";


const style = {
  "text-align": "center"
}
class Mainprofile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      url: "",
      username: "",
      bio: "",
      status: false,
      Blog: "",
      country: "",
      title: "",
      id: "",
      image: null,
      urlimg: "",
      text: "",
      blogs: [],
      flipped: false,
      image1: null,
      bio1: "",
      hide: false,
      visible : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
  }

  componentDidMount() {
    var that = this;
    const token = "token " + localStorage.getItem("token");
    fetch("auth/user", {
      method: "get",
      headers: { Authorization: token }
    })
      .then(data => data.json())

      .then(data => {
        this.setState({ username: data.username }, () => {
          this.username();
        });
      });
  }

  username() {
    var that = this;
    fetch("post/")
      .then(data => data.json())
      .then(data => {
        for (var i = 0; i < data.length; i++) {
          // console.log(data[0])
          console.log(this.state.username);
          if (data[i].username == this.state.username) {
            that.setState({
              username: data[i].username,
              bio: data[i].bio,
              url: data[i].url,
              id: data[i].id,
              bio1: data[i].bio
            });
          }
        }
      });
  }

  handleChange(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  }

  handleUpload(e) {
    e.preventDefault();
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      `state_changed`,
      snapshot => {},
      error => {},
      () => {
        storage
          .ref(`images`)
          .child(image.name)
          .getDownloadURL()
          .then(urlimg => {
            console.log(urlimg);
            this.setState({ urlimg });
          });
      }
    );
  }

  handleChange1(e) {
    if (e.target.files[0]) {
      const image1 = e.target.files[0];
      this.setState(() => ({ image1 }));
    }
  }

  handleUpload1(e) {
    e.preventDefault();
    const { image1 } = this.state;
    const uploadTask = storage.ref(`images/${image1.name}`).put(image1);
    uploadTask.on(
      `state_changed`,
      snapshot => {},
      error => {},
      () => {
        storage
          .ref(`images`)
          .child(image1.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState({ url }, () => {
              this.update();
            });
          });
      }
    );
  }

  update() {
    var profile = {
      url: this.state.url,
      bio: this.state.bio1
    };
    console.log({ profile: profile });

    fetch(`Update/${this.state.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        profile: profile
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ bio: this.state.bio1, hide: false });
      });
  }

  yourdata(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  server(e) {
    e.preventDefault();
    var that = this;
    fetch("blogs/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ProfileId: this.state.id,
        Blog: this.state.Blog,
        country: this.state.country,
        title: this.state.title,
        image: this.state.urlimg
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ text: "your blog is uptodate" });
      });
  }

  blog(e) {
    // const token = localStorage.getItem('token');
    e.preventDefault();
    var that = this;
    fetch("blogs/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        var arr = [];
        for (var i = 0; i < data.length; i++) {
          if (this.state.id == data[i].ProfileId) {
            arr.push(data[i]);
          }
        }
        console.log(arr);

        that.setState({
          blogs: arr
        });
      });
  }

  logout() {
    localStorage.clear();
    this.setState({
      flipped: true
    });
    return <Redirect to="http://localhost:3000/SignIn" />;
  }

  renderRedirect() {
    if (this.state.flipped) {
      return (
        <Redirect
          to={{
            pathname: "signIn/"
          }}
        />
      );
    }
  }

  // yourdata(event){
  //     this.setState({ [event.target.name]: event.target.value });
  //  }

  click() {
    this.setState({
      status: true
    });
  }

  hide() {
    this.setState({
      hide: true
    });
  }
  show() {
    this.setState({
      hide: false
    });
  }
  openModal() {
    this.setState({
        visible : true
    });
}

closeModal() {
    this.setState({
        visible : false
    });
}
  render() {
    return (
      <div style={style}> 
      {this.renderRedirect()}
      {!this.state.status ? (
        <div>
    <section className="section1 no-background">
        <div className="container1 has-text-centered">
            <figure className="image1 is-128x128 center1" style={{marginLeft: "41%",
    marginTop: "30px"}}>
            <Avatar className="avatar1"
            style={{
              width: "250px",
              height: "250px",
              border: 0,
              objectFit: "cover",
              alignItems: "center",
              border:'solid',
              borderColor:'blue'
            }}
          >
            <img
              id="a"
              src={
                this.state.url ||
                "https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435"
              }
              alt="uploaded image"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </Avatar>              </figure>
              <br/>
            <h1 className="title is-2 inline1" style={{color:"black"}} >{this.state.username}</h1>
            <div>
                       <h3>{this.state.email}</h3>
                        {!this.state.hide ? (
                          <div>
                            <p>{this.state.bio}</p>
                            <Button onClick={this.hide.bind(this)}
                            style={{border:'solid',
                            borderColor:'blue'}}>update bio</Button>
                          </div>
                        ) : (
                          <div>
                            <input
                              type="text"
                              name="bio1"
                              onChange={this.yourdata.bind(this)}
                            />
                            
                            <Button onClick={this.update.bind(this)}
                            style={{border:'solid',
                            borderColor:'blue'}}>update</Button>

                            <Button onClick={this.show.bind(this)}>cancel</Button>
                          </div>
                        )}
                      </div> 
            <br/>
            <div>
           <input
              type="file"
              name="image1"
              onChange={this.handleChange1}
              style={{marginBottom: "20px", marginTop: "11px",
              marginLeft: '25px',position:"absolute",marginLeft:'50%'}}
            />
            <span>
            <div>
                            
                            <Button onClick={this.handleUpload1.bind(this)}
                            type="submit"
                            style={{border:'solid',
                            borderColor:'blue',marginRight: '8.5%'}}>update pic</Button>
                          </div>
            </span>
        </div>
        </div>
    </section>
    <hr/>
    </div>
      ):(
        <Blogs username={this.props.username} Redirect to="/Blogs" />
      )}
      <section className="row">
        

      </section>
      </div>
    )
  }
}

export default Mainprofile;
//      {this.renderRedirect()}
//     {!this.state.status ? (
//       <div >
//         <h1 style={{color:"black"}}>{this.state.username}</h1>
//         <div>
//         </div>
//         <div
// >
//           <Avatar
//             style={{
//               margin: "theme.spacing(1)",
//               width: "250px",
//               height: "250px",
//               margin: "theme.spacing(1)",
//               border: 0,
//               objectFit: "cover"
//             }}
//           >
//             <img
//               id="a"
//               src={
//                 this.state.url ||
//                 "https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435"
//               }
//               alt="uploaded image"
//               style={{ objectFit: "cover", height: "100%" }}
//             />
//           </Avatar>
//           <div>
//             <input
//               type="file"
//               name="image1"
//               onChange={this.handleChange1}
//               style={{marginBottom: "20px", marginTop: "20px",
//               marginLeft: '25px'}}
//             />

//             <button
//               onClick={this.handleUpload1.bind(this)}
//               type="submit"
//             >
//               update
//             </button>
//         </div>
//         <div>
            
//             <h3>{this.state.email}</h3>
//             {!this.state.hide ? (
//               <div>
//                 <p>{this.state.bio}</p>
//                 <Button onClick={this.hide.bind(this)}>update bio</Button>
//               </div>
//             ) : (
//               <div>
//                 <input
//                   type="text"
//                   name="bio1"
//                   onChange={this.yourdata.bind(this)}
//                 />
//                 <Button onClick={this.update.bind(this)}>update</Button>
//                 <Button onClick={this.show.bind(this)}>cancel</Button>
//               </div>
//             )}
//           </div>

//           <form
//             noValidate
//           >
//             <p>
//               upload Travel image
//             </p>
//             <input
//               type="file"
//               name="image"
//               onChange={this.handleChange}
//             />

//             <Button
//               onClick={this.handleUpload.bind(this)}
//               type="submit"
//               className="Button"
//               variant="contained"
//             >
//               Upload
//             </Button>
//             <div
//             >
//               <Avatar
//                 style={{
//                   borderRadius: "4px",
//                   width: "430px",
//                   margin: "theme.spacing(1)",
//                   height: "180px",
//                   margin: "theme.spacing(1)",
//                   objectFit: "cover"
//                 }}
//               >
//                 <img
//                   src={
//                     this.state.urlimg ||
//                     "https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435"
//                   }
//                   alt="uploaded image"
//                   style={{ objectFit: "cover" }}
//                 />
//               </Avatar>
//             </div>
//           </form>
//           <form>
//             <TextField
//               onChange={this.yourdata.bind(this)}
//               variant="outlined"
//               margin="normal"
//               id="title"
//               label="title"
//               name="title"
//               autoComplete="title"
//               autoFocus
//             />
//             <TextField
//               onChange={this.yourdata.bind(this)}
//               variant="outlined"
//               margin="normal"
//               id="country"
//               label="country"
//               name="country"
//               autoComplete="country"
//               autoFocus
//             />
//             <TextField
//               onChange={this.yourdata.bind(this)}
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="Blog"
//               label="Blog"
//               name="Blog"
//               autoComplete="Blog"
//               autoFocus
//             />
//             <br />
//             <Button
//               onClick={this.server.bind(this)}
//               type="submit"
//               className="Button"
//               variant="contained"
//               color="primary"
//             >
//               Add Blog
//             </Button>
//             <Button
//               onClick={this.click.bind(this)}
//               id="button"
//               type="submit"
//               variant="contained"

//             >
//               See Bloges
//             </Button>
//             <Button
//               onClick={this.blog.bind(this)}
//               id="button"
//               type="submit"
//               variant="contained"

//             >
//               my Bloges
//             </Button>
//             <Button
//               onClick={this.logout.bind(this)}
//               id="button"
//               type="submit"
//               variant="contained"
//             >
//               log out
//             </Button>
//           </form>
//           <table>
//             <tbody>
//               {this.state.blogs.map((blog, i) => (
//                 <tr
//                   key={blog.id}

//                 >
//                   <span style={{ color: "#FA3905", fontSize: "18px" }}>
//                     <strong>Blog title:</strong>
//                   </span>
//                   <span>{blog.title}</span>
//                   <span

//                   >
//                     <strong>country: </strong>
//                   </span>
//                   <span>{blog.country}</span>
//                   <span

//                   >
//                     <strong>Blog: </strong>
//                   </span>
//                   <span>{blog.Blog}</span>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     ) : (
//       <Blogs username={this.props.username} Redirect to="/Blogs" />
//     )} */}
