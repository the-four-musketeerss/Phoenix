import React from 'react';
import Link from 'react-router-dom';

class Flights extends React.Component{
    constructor(props){
          super(props);
        this.state = {
          Agents:[],
          Carriers:[],
          Currencies:[],
          Itineraries:[],
          Legs:[],       
          Places:[],
          Query:[],
          Segments:[],
          sessionKey:""
        }
    }
  
    componentDidMount(){
      var that=this;
      fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0",{
        method: "POST",
        headers : {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":"dd3b215dacmsh0fc900bebe41f9fp1964ccjsn2a45d2ede313",
          "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        },
        body:"inboundDate=2019-09-10&cabinClass=business&children=0&infants=0&country=US&currency=USD&locale=en-US&originPlace=SFO-sky&destinationPlace=LHR-sky&outboundDate=2019-09-01&adults=1"
    }).then((response) => {
      console.log("aaaaaaah")
      console.log(response.headers.get("location"))
      var sessionkey = response.headers.get("location");
      var arr = sessionkey.split("/");
      console.log(arr[7],"hellllllooooo");
      that.setState({
        sessionKey: arr[7]
      })
      
      console.log(that.state);
        // return response.json(); //response.json() is resolving its promise. It waits for the body to load
      fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/"+that.state.sessionKey+"?pageIndex=0&pageSize=10?",{
        method: "GET",
        headers : {
          "X-RapidAPI-Key":"dd3b215dacmsh0fc900bebe41f9fp1964ccjsn2a45d2ede313",
          "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
    }).then(response => response.json())
    .then(json => {
      // console.log(json)
      that.setState({
        Agents:json.Agents,
        Carriers:json.Carriers,
        Currencies:json.Currencies,
        Itineraries:json.Itineraries,
        Legs:json.Legs,
        Places:json.Places,
        Query:json.Query,
        Segments:json.Segments
      })
      console.log(json,"hi");
      console.log(that.state.Itineraries[0].PricingOptions[1].DeeplinkUrl,"hey");
        // return response.json(); //response.json() is resolving its promise. It waits for the body to load
    })
    }).catch((err)=>{
      console.log(err)
    })
    }
  
    render(){
      if (this.state.Itineraries.length == 0) {
        console.log("hereee yes")
        return(<div>this may take sometime...</div>);
      } else {
      var legs = this.state.Itineraries.map(function(Itinerary) {
        var outboundId = Itinerary.OutboundLegId;
        var inboundId = Itinerary.InboundLegId;
        return(<div>
          {this.state.Legs.map(function(leg){
            if(leg.Id == outboundId){
              return(
                <div>
                <div>Going Trip:</div>
                <li key={"arrival_" + leg.Id}>Arrival:{leg.Arrival}</li>
                <li key={"departure_" + leg.Id}>Departure: {leg.Departure}</li>
                <li key={"flight_no_"+ leg.Id}>FlightNumber:{leg.FlightNumbers[0].FlightNumber}</li>
                </div>
              )
            }
            if(leg.Id == inboundId){
              return(
                <div>
                  <div>Return Trip:</div>
                <li key={"arrival_" + leg.Id}>Arrival:{leg.Arrival}</li>
                <li key={"departure_" + leg.Id}>Departure: {leg.Departure}</li>
                <li key={"flight_no_"+ leg.Id}>FlightNumber:{leg.FlightNumbers[0].FlightNumber}</li>
                </div>
              )
            }
          })
          }
        {Itinerary.PricingOptions.map(function(p) {return (<div>
          <div> ticket Price:</div>
          <li>price:{p.Price}</li>
          <li> <a href={p.DeeplinkUrl}>Booking</a></li>
        </div>)})}
        <br/>
        <br/>
        </div>)
      }.bind(this));
      return(
      <div>
        {legs}
    </div>
      )}
    }     
  }
  
  export default Flights;
  