import React from 'react';
import SelectSearch from 'react-select-search';
import Select from 'react-select';

//////////////////////////////////////////inline css////////////////////////////////////////
const divStyle = {
  padding: '10px',
  margin: '40px',
  border: '5px solid orange'
};
const divS = {
  padding: '10px',
  margin: '40px',
  border: '5px dashed black'
};
const div = {
  height: '535px',
  padding: '18px',
  margin: '40px',
  border: '5px solid black',
  width: '389px',
  marginLeft: '524px'
};
const font = {
 fontSize:'50px'
};
  

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
////////////////////////////////////////flights component///////////////////////////////////
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

          cabinClass:"economy",
          currency:"USD",
          locale:"en-US",
          adults:1,
          children:0,
          infants:0,
          inboundDate:"",
          outboundDate:"",
          country:"JO",
          originPlace:"",
          destinationPlace:"",
          countries:[],
          From:[{PlaceName:"wait"}],
          To:[],
          selectedOption: null,
        }
    }
///////////////////////////get the list of countries function///////////////////////////////
    countries(){

    }
 ////////////////////////////////////////////////////////////////// select search
    handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    }
/////////////////////////////////////get the tickets function///////////////////////////////    
    search =()=>{
      //make a post request to the external api and post the info from user
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
      console.log(this.state);
      //make a get request to the external api and get the information abt the tickets
      fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/"+arr[7]+"?pageIndex=0&pageSize=10?",{
        method: "GET",
        headers : {
          "X-RapidAPI-Key":"dd3b215dacmsh0fc900bebe41f9fp1964ccjsn2a45d2ede313",
          "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
    }).then(response => response.json())
    .then(json => {
      // console.log(json)
      //save the information in the state 
      this.setState({
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
      console.log(this.state,"hey");
    })
    }).catch((err)=>{
      console.log(err)
    })
    };
/////////////////////////////change the cabin class onchange function///////////////////////
    handlePrint(e) {
        this.setState({
          cabinClass:e.target.value
        },()=>{console.log(this.state.cabinClass)})
    }
/////////////////////////take the arrival date input and save it in state/////////////////
    changeinb(e){
      console.log("hiiiii")
      this.setState({
        inboundDate:e.target.value
      },()=>console.log(this.state))
    };
//////////////////////////////////departure date and save it in the state//////////////////
    changeoutb(e){
      console.log("hiiiii")
      this.setState({
        outboundDate:e.target.value
      },()=>console.log(this.state))
    };
////////////////////////////////take # of adults and save it in state///////////////////////    
    changeAd(e){
      this.setState({
        adults:e.target.value
      },()=>console.log(this.state))
    }
//////////////////////////////take # of children and save it in state//////////////////////
    changech(e){
      this.setState({
        children:e.target.value
      },()=>console.log(this.state))
    }
////////////////////////////////take # of infants and save it in state//////////////////////
    changeinf(e){
      this.setState({
        infants:e.target.value
      },()=>console.log(this.state))
    }
    from(e){
      var that=this;
      this.setState({
        originPlace:e.target.value
      },()=>{
        fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/USD/en-US/?query="+this.state.originPlace,{
          method: "GET",
          headers : {
            "X-RapidAPI-Key":"dd3b215dacmsh0fc900bebe41f9fp1964ccjsn2a45d2ede313",
            "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
          }
      }).then(response => response.json())
      .then(data => {console.log(data)
          this.setState({
            From:data.Places
          },()=>{console.log(this.state.From,'hey')})
        })
      })
    }
    to(e){
      this.setState({
        destinationPlace:e.target.value
      },()=>{
        fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/USD/en-US/?query="+this.state.destinationPlace,{
          method: "GET",
          headers : {
            "X-RapidAPI-Key":"dd3b215dacmsh0fc900bebe41f9fp1964ccjsn2a45d2ede313",
            "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
          }
      }).then(response => response.json())
      .then(json => {console.log(json)})
      })
    }
    render(){
      const { selectedOption } = this.state;

      if (this.state.Itineraries.length === 0) {
        return(
            <div style={div}>
              {/* <div>{this.state.From[0].PlaceName}</div> */}
              {/* <select>
                {this.state.From.map(test => 
                  <option>{test.PlaceName}</option>
                )}
              </select> */}
            <label>
            Departure:
            </label>
            <input type="date" value={this.state.outboundDate} onChange={this.changeoutb.bind(this)}></input>
            <br/>
            <br/>
            <label>
            Arrival:
            </label>
            {/* d.replace(/\//g,"-").split("-").reverse().join("-") */}
            <input type="date" value={this.state.inboundDate} onChange={this.changeinb.bind(this)}></input>
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
            From:
            {/* <SelectSearch options={
              // this.state.From.map((fr)=>{

              //       name={fr.PlaceName}

              // })
              [
                {name: 'English', value: 'en'},]
            } value="{this.state.originPlace}" onChange={this.from.bind(this)} name="from" placeholder="Choose your destination" /> */}
            </label>
            <input value ={this.state.originPlace}onChange={this.from.bind(this)}></input>
            <br/>
            <br/>
            <label>
            TO:
            </label>
            <input value ={this.state.destinationPlace}onChange={this.to.bind(this)}></input>
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
        return(<div style={divS}>
          <div style={font}>Ticket</div>
          {this.state.Legs.map(function(leg){
            if(leg.Id === outboundId){
              return(
                <div style={divStyle}>
                <div>Going Trip:</div>
                Arrival:{leg.Arrival}
                <br/>
                Departure: {leg.Departure}
                <br/>
                Duration: {Math.ceil(leg.Duration/60)+"hrs"}
                <br/> 
                FlightNumber:{leg.FlightNumbers[0].FlightNumber}
                </div>
              )
            }
            if(leg.Id === inboundId){
              return(
                <div style={divStyle}>
                  <div>Return Trip:</div>
                Arrival:{leg.Arrival}
                <br/>
                Departure: {leg.Departure}
                <br/>
                Duration: {Math.ceil(leg.Duration/60)+"hrs"}
                <br/>
                FlightNumber:{leg.FlightNumbers[0].FlightNumber}
                </div>
              )
            }
          })
          }
        {Itinerary.PricingOptions.map(function(p) {return (<div style={divStyle}>
          <div> ticket Price:</div>
          price:{p.Price}
          <br/>
           <a href={p.DeeplinkUrl}>Booking</a>
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