import React from 'react';



class Form extends React.Component{
    render(){
        return(
            <div>
            <h2>country : </h2>
            <h3>{this.props.country}</h3>
            <br/>
            <h2>city : </h2>
            <h3>{this.props.city}</h3>
            <br/>
            <h2>temperature : </h2>
            <h3>{this.props.temperature}</h3> 
            <br/>
            <h2>humidity : </h2>
            <h3>{this.props.humidity}</h3>
            <br/>
            <h2>description : </h2>
            <h3>{this.props.description}</h3>
            <br/>
            <h2> Wind Speed : </h2>
            <h3>{this.props.windspeed}</h3>
            <br/>
            </div>
        )
    }
}


class Weather extends React.Component{ 
constructor(props){
    super(props);
        this.state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
        toggle:false,
        windspeed: undefined
    }
    }

   data(event) {
    this.setState({[event.target.name]: event.target.value });
   }

getWeather = async (e) => {
   e.preventDefault();
   const city = this.state.city;
   const country = this.state.country;
   console.log(city)
   console.log(country)
   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=1eb7fa8ed00a4e45ec56c0ffaf5a987d&units=metric`);
   const data = await api_call.json();
   console.log(data)
   if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
        toggle:true,
        windspeed:data.wind.speed
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }

     render(){
      return(
      <div>
      <h1>Weather Finder</h1>
      <h3>Find out temperature, condetions and more..</h3>
      <form>
      <input onChange ={this.data.bind(this)} type = "text" name = "city" placeholder = " City..."/>
      <input onChange ={this.data.bind(this)} type = "text" name = "country" placeholder = "Country..."/>
      <button onClick={this.getWeather}>Get Weather</button>
      </form>
      {this.state.toggle ? (
      <div>    
      <Form 
      temperature = {this.state.temperature}
      humidity = {this.state.humidity}
      description = {this.state.description}
      city = {this.state.city}
      country = {this.state.country}
      error = {this.state.error}
      windspeed = {this.state.windspeed}
      />
      </div>
      ) : (
      null
        )}
      </div>
    )}
  }
  
  export default Weather;
