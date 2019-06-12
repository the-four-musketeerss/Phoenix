import React from 'react';

class Hotels extends React.Component{
    constructor(props){
          super(props);
        this.state = {
          hotels:[]
        }
    }
  
    componentDidMount(){
      fetch("https://leejaew-hotels-in-singapore-v1.p.rapidapi.com/hotels?country=Singapore",{
        method: "GET",
        headers : {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-RapidAPI-Key":"db256ca299mshe3c2e4fe6cf1c19p1f959bjsn7d3664666d0b"
        }
        
      })
        .then(data => data.json())
        .then((data) => {
           console.log(data)
           this.setState({ hotels: data })
         }).catch((err)=>{
          console.log(err)
         })
    }
  
     render(){
      return(<div>
           {this.state.hotels.map(hotel =>
              <div>
                Name:{hotel.name}<br />
                Rooms:{hotel.totalrooms}<br />
                country:{hotel.country}<br />
                Phone Number:{hotel.phone}<br/>
                <h1></h1>
              </div>
            )}
        </div>
    )}
  }
  
  export default Hotels;
  