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
      fetch(" https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0",{
        method: "POST",
        headers : {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":"dd3b215dacmsh0fc900bebe41f9fp1964ccjsn2a45d2ede313",
          "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
        },
        body:"inboundDate=2019-09-10&cabinClass=business&children=0&infants=0&country=US&currency=USD&locale=en-US&originPlace=SFO-sky&destinationPlace=LHR-sky&outboundDate=2019-09-01&adults=1"
    }).then(function (response) {
      console.log(response)
        // return response.json(); //response.json() is resolving its promise. It waits for the body to load
    }).then(function (responseData) {
        //Do your logic
    }).catch((err)=>{
      console.log(err)
    })
        
      // })
      //   .then(data => data.json())
      //   .then((data) => {
      //      console.log(data)
      //      this.setState({ sessionKey: data })
      //    }).catch((err)=>{
      //     console.log(err)
      //    })
    }
  
     render(){
      return(<div>
        <h1>flights</h1>
        </div>
    )}
  }
  
  export default Flights;
  