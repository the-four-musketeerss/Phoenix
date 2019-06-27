// ipmort what i want from material - ui for design 
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// Hotel class 
class Hotels extends React.Component{
    constructor(props){
          super(props);
        this.state = {
          hotels:[],
          search:""
        }
    }
  // i want to save what i write inside seach bar in the search to use it later when i want to bring the resultes
    Search(event){
      this.setState({
        search : event.target.value
      })
    }
  // to bring the data for hotels from database i use fetch and i save the data inside hotels array 
    componentDidMount(){
      fetch("hotels/")
        .then(data => data.json())
        .then((data) => {
           console.log(data)
           this.setState({ hotels: data })
         }).catch((err)=>{
          console.log(err)
         })
    }
  
    render(){
      // to filter the hotels depends on the search bar input
      let filtered =this.state.hotels.filter(
        (hotel) =>{
          return hotel.country.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      )
      return(<div>
            {/* search bar using material - ui for style */}
              <form class="form-inline" style={{display: 'flex',flexWrap: 'wrap',}}>
                    <TextField
                      id="outlined-search"
                      label="Search field"
                      type="search"
                      style={{margin :"auto" , marginTop:"20px",marginRight:"theme.spacing(1)",width:"30%"}}
                      margin="normal"
                      variant="outlined"
                      onChange= {this.Search.bind(this)}
                    />
              </form>
              {/* to iterate ove the array and show all hotels inside this array  with material-ui style*/}
              {filtered.map(hotel =>
        <div>
              {/* the main idea from span class fa fa-star to put the stars like rating   */}
             <div className="card" style={{height:"40rem" ,width: "21rem" ,float:"left",margin:"10px"}}>
                <img className="card-img-top" src={hotel.image} alt="Card image cap" height="200" width="42"/>
                <div className="card-body">
                  <h5 className="card-title" style={{color:"crimson"}}>{hotel.name}</h5>
                  <p className="card-text"><span style={{fontWeight:"bold"}}>Country:</span>{hotel.country}</p>
                  <p className="card-text"><span style={{fontWeight:"bold"}}>Phone:</span>{hotel.phone}</p>
                  <p className="card-text"><span class="fa fa-star checked" style={{color:"	gold"}}></span>
                  <span class="fa fa-star checked" style={{color:"gold"}}></span><span class="fa fa-star checked" style={{color:"gold"}}></span><span class="fa fa-star checked" style={{color:"gold"}}></span>
                  <span class="fa fa-star checked" style={{color:"gold"}}></span> stars</p>
                  <p className="card-text"><span style={{fontWeight:"bold"}}>Price: </span><span style={{color:"green"}}>{hotel.price}</span></p>
                  <p className="card-text"><span style={{fontWeight:"bold"}}>description:</span>{hotel.desc}</p>
                  <a href={hotel.link} target="_blank" className="btn btn-primary">Reservation</a> 
                </div>
            </div>

        </div>
            )}
        </div>
    )}
  }

  export default Hotels;
  