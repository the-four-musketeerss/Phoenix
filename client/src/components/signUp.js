
import React from 'react';
import './signUp.css';
import SignIn from './signIn.js';
import { Route, Redirect } from 'react-router'
import { storage } from './firebase';
import Mainprofile from './mainprofile.js';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{color:'#FA3905',textAlign:"bold", fontSize:'13px'}}>
    {'Built with love by PHOENIX team'}
    </Typography>
  );
}

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
          id:"",
          toggleSignIn: false,
          error:""
          , token:""
        }
   this.handleChange = this.handleChange.bind(this);

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
    server(e){
      e.preventDefault();
      var that = this;
      fetch("auth/signUp", {
        method: "POST",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({"username":this.state.username,
        "password" : this.state.password,
        "email":this.state.email
        })
      }).then((response) => response.json())
      .then((data)=>{
        console.log(data.token)
        console.log("hi")
        var token = data.token
        localStorage.setItem('token', token);
        that.setState({
          token:data.token
        }
        ,() => {
          console.log("hi")
              that.signUp(that);
            }
            )
       
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
        "url": this.state.url,
        "token":this.state.token
        } 
        )
      }).then((response) => {
        console.log(response.status)
			if (response.status == 201) {
				response.json().then((body) => {
					this.setState(
						{
              toggleSignIn: true
						}
					);
				});
			} else {
					this.setState(
						{
              error : "this email is ourready token"
						}
					);
			}
		});
	}





     render(){
      return(<div id="div" style={{marginLeft:'80px',backgroundImage:"url('freeLogo.jpeg')",backgroundRepeat:'no-repeat',backgroundSize:"40% 100%",borderRadius:"36%"}}>
        {!this.state.toggleSignIn ? (
          <div style={{alignItems: 'center',marginLeft:"60px", marginTop:'theme.spacing(8)'}}>
              <Container component="main" maxWidth="xs">
         <CssBaseline />
          <div style={{alignItems: 'center', marginTop:'theme.spacing(8)',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
            <Avatar style={{ margin:'theme.spacing(1)',width:'150px',height:"150px",margin: 'theme.spacing(1)',border: 0,objectFit: 'cover'}}>
            <img 
            src={this.state.url ||'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435'}
             alt="uploaded image"
             style={{ objectFit: 'cover',height: '100%'}}
            />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form style={{width: '100%',marginTop:'theme.spacing(3)'}} noValidate>
              <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange ={this.yourdata.bind(this)}
                  autoComplete="uname"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  autoFocus
                />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange ={this.yourdata.bind(this)}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange ={this.yourdata.bind(this)}
                    autoComplete="Bio"
                    name="bio"
                    variant="outlined"
                    required
                    fullWidth
                    id="Bio"
                    label="Bio"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange ={this.yourdata.bind(this)}
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
                <input
                  type="file"
                  name="image"
                  onChange={this.handleChange}
                  style={{marginBottom:"10px"}}
                /> 
                <Button
                 onClick={this.handleUpload.bind(this)}
                  type="submit"
                  className="Button"
                  fullWidth
                  variant="contained"
                  style={{ margin: 'theme.spacing(3, 0, 2)',backgroundColor:'#F53400',color:"white",marginBottom:'10px'}}
                >
                  Upload Image
                </Button>   
                <Button
                  onClick={this.server.bind(this)}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ margin: 'theme.spacing(3, 0, 2)',marginBottom:"10px"}}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="#" variant="body2">
                        Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
            </Grid>
                </Grid>
              </form>
               </div>
               <Box mt={5}>
                  <MadeWithLove />
              </Box>
        </Container>
              </div>
        ) : (
          <  
          Redirect to='/Mainprofile'      
          />
        )}
      </div>
        
    )}
  }
  
  export default SignUp;