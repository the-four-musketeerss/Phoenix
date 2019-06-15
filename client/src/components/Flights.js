import React from 'react';

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
          sessionKey:"",
          cabinClass:"economy",
          currency:"USD",
          locale:"en-US",
          adults:1,
          children:0,
          infants:0,
          inboundDate:"",
          outboundDate:"",
          country:"US",
          originPlace:"SFO-sky",
          destinationPlace:"LHR-sky"

        }
    }
  
    search(){
      var that=this;
      fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0",{
        method: "POST",
        headers : {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":"dd3b215dacmsh0fc900bebe41f9fp1964ccjsn2a45d2ede313",
          "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        },
        body:`inboundDate=${this.state.inboundDate}&cabinClass=${this.state.cabinClass}&children=${this.state.children}&infants=${this.state.infants}&country=${this.state.country}&currency=${this.state.currency}&locale=en-${this.state.locale}&originPlace=${this.state.originPlace}&destinationPlace=${this.state.destinationPlace}&outboundDate=${this.state.outboundDate}&adults=${this.state.adults}`
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
      console.log(that.state,"hey");
        // return response.json(); //response.json() is resolving its promise. It waits for the body to load
    })
    }).catch((err)=>{
      console.log(err)
    })
    };
    handlePrint(e) {
        this.setState({
          cabinClass:e.target.value
        },()=>{console.log(this.state.cabinClass)})
    }
    // handlePrint(event) {
    //   if (this.state.value === 'economy') {
    //       this.setState({
    //         cabinClass:'economy'
    //       })
    //       console.log(this.state);
    //   }
    //   if (this.state.value === 'premiumeconomy') {
    //     this.setState({
    //       cabinClass:'premiumeconomy'
    //     })
    //     console.log(this.state);
    //   }
    //   if (this.state.value === 'business') {
    //     this.setState({
    //       cabinClass:'business'
    //     })
    //     console.log(this.state);
    //   }
    //   if (this.state.value === 'first') {
    //     this.setState({
    //       cabinClass:'first'
    //     })
    //     console.log(this.state);
    //   }
    // }
    changeinb(e){
      console.log("hiiiii")
      this.setState({
        inboundDate:e.target.value
      },()=>console.log(this.state))
    };

    changeoutb(e){
      console.log("hiiiii")
      this.setState({
        outboundDate:e.target.value
      },()=>console.log(this.state))
    };
    changeAd(e){
      this.setState({
        adults:e.target.value
      },()=>console.log(this.state))
    }
    changech(e){
      this.setState({
        children:e.target.value
      },()=>console.log(this.state))
    }
    changeinf(e){
      this.setState({
        infants:e.target.value
      },()=>console.log(this.state))
    }
    render(){
      if (this.state.Itineraries.length === 0) {
        // console.log("wait...")
        // return(<div>this may take sometime...</div>);
        return(
            <div>
            <label>country:</label>
            <input></input>
            <br/>
            <br/>
            <label>
            destination:
            </label>
            <input></input>
            <br/>
            <br/>
            <label>
            inboundDate:
            </label>
            {/* d.replace(/\//g,"-").split("-").reverse().join("-") */}
            <input type="date" value={this.state.inboundDate} onChange={this.changeinb.bind(this)}></input>
            <br/>
            <br/>
            <label>
            outboundDate:
            </label>
            <input type="date" value={this.state.outboundDate} onChange={this.changeoutb.bind(this)}></input>
            <br/>
            <br/>
            <label>
            cabinClass:
            </label>
            <select onChange={this.handlePrint.bind(this)}>
              <option value="economy" >economy</option>
              <option value="premiumeconomy">premiumeconomy</option>
              <option value="business">business</option>
              <option value="first">first</option>
            </select>
            <br/>
            <br/>
            <label>
            originPlace:
            </label>
            <input></input>
            <br/>
            <br/>
            <label>
            adults:
            </label>
            <input type ="number" min="1" max="8" value = {this.state.adults} onChange={this.changeAd.bind(this)}></input>
            <br/>
            <br/>
            <label>
            children:
            </label>
            <input type ="number" min="0" max="8" value = {this.state.children} onChange={this.changech.bind(this)}></input>
            <br/>
            <br/>
            <label>
            infants:
            </label>
            <input type ="number" min="0" max="8" value = {this.state.infants} onChange={this.changeinf.bind(this)}></input>
            <button onClick={this.search.bind(this)}>search </button>
            </div>
          )
      } else {
        var legs = this.state.Itineraries.map(function(Itinerary) {
        var outboundId = Itinerary.OutboundLegId;
        var inboundId = Itinerary.InboundLegId;
        return(<div>
          {this.state.Legs.map(function(leg){
            if(leg.Id === outboundId){
              return(
                <div>
                <div>Going Trip:</div>
                <li key={"arrival_" + leg.Id}>Arrival:{leg.Arrival}</li>
                <li key={"departure_" + leg.Id}>Departure: {leg.Departure}</li>
                <li key={"duration_" + leg.Id}>Duration: {Math.ceil(leg.Duration/60)+"hrs"} </li>
                <li key={"flight_no_"+ leg.Id}>FlightNumber:{leg.FlightNumbers[0].FlightNumber}</li>
                </div>
              )
            }
            if(leg.Id === inboundId){
              return(
                <div>
                  <div>Return Trip:</div>
                <li key={"arrival_" + leg.Id}>Arrival:{leg.Arrival}</li>
                <li key={"departure_" + leg.Id}>Departure: {leg.Departure}</li>
                <li key={"duration_" + leg.Id}>Duration: {Math.ceil(leg.Duration/60)+"hrs"} </li>
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
          {/* <li>{this.state.Agents.map(function(agent){
            if(p.Agents == agent.Id){
              return <li>{agent.ImageUrl}</li>
            }
          })}</li> */}
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
  