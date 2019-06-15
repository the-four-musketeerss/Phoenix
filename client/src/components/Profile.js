import React from 'react';
import { browserHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Profile extends React.Component{ 
    constructor(props){
          super(props);
        this.state = {
        }
    }
  
 
  
     render(){
      return(<div>
          <Card style={{width:"100%"}}>
          <CardActionArea>
              <CardMedia
                style={{height: 500}}
                image={this.props.location.state.newbook.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="h2">
                  {this.props.location.state.newbook.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                   {this.props.location.state.newbook.country}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.location.state.newbook.Blog}  
                </Typography>
              </CardContent>
              {/* <img class = "rounded" src={this.props.location.state.newbook.image} style={{height:"500px",width:"100%"}}/><br />
              <div>
                <h4> {this.props.location.state.newbook.title}</h4>
                <h4>Country :{this.props.location.state.newbook.country}</h4>
                <h4>Blogs : {this.props.location.state.newbook.Blog}</h4>
              </div> */}
           </CardActionArea>
           <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
           </Card>
        </div>
    )}
  }
  
  export default Profile;
  