import React from 'react';

class Flights extends React.Component{
    constructor(props){
          super(props);
        this.state = {
          flights:[],
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
    }).then(function (response) {
      console.log(response.headers.get("location"))
      var sessionkey = response.headers.get("location");
      var arr = sessionkey.split("/");
      console.log(arr);
      that.setState({
        sessionKey:arr[arr.length-1]
      })
      console.log(that.state.sessionKey);
        // return response.json(); //response.json() is resolving its promise. It waits for the body to load
    }).then(function () {
      fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/"+that.state.sessionKey+"?pageIndex=0&pageSize=10?",{
        method: "GET",
        headers : {
          "X-RapidAPI-Key":"dd3b215dacmsh0fc900bebe41f9fp1964ccjsn2a45d2ede313",
          "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        }
    }).then(response => response.json())
    .then(json => {
      console.log(json)
      that.setState({
        flights:json
      })
      console.log(that.state.flights);
        // return response.json(); //response.json() is resolving its promise. It waits for the body to load
    })
    }).catch((err)=>{
      console.log(err)
    })
    }
  
     render(){
      return(<div>
        <h1>flights</h1>
        </div>
    )}
  }
  
  export default Flights;
  