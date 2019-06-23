import React from 'react';
import "./weathstyle/stylee.css"
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Form extends React.Component{
    render(){
        return(
            <div>
            {/* <h2>country : </h2>
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
            <br/> */}
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
        windspeed: undefined,
        pressure:undefined
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
        windspeed:data.wind.speed,
        pressure:data.main.pressure
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
      <div style={{overflow: 'auto',height:'100vh',backgroundImage:"url('https://www.carbonbrief.org/wp-content/uploads/2016/04/Corbis-RM-Barcelona-in-the-rain.jpg')",backgroundRepeat:'no-repeat',backgroundSize:"cover"}}>
    <form style={{ marginLeft:'36%',display: 'flex',flexWrap: 'wrap',marginTop:'10%'}} noValidate autoComplete="off">
      <TextField
        onChange ={this.data.bind(this)}
        id="outlined-with-placeholder"
        label="City"
        placeholder="City..."
        style={{backgroundColor:"white",borderRadius:'20px',marginLeft: 'theme.spacing(1)', marginRight: 'theme.spacing(1)'}}
        margin="normal"
        variant="outlined"
        name = "city"
      />
       <TextField
        onChange ={this.data.bind(this)}
        id="outlined-with-placeholder"
        label="Country"
        placeholder="Country..."
        style={{backgroundColor:"white",borderRadius:'20px',marginLeft: 'theme.spacing(1)', marginRight: 'theme.spacing(1)'}}
        margin="normal"
        variant="outlined"
        name = "country"
      />
      <Button onClick={this.getWeather} variant="contained" color="secondary" style={{marginLeft: '20px',width:'10%',height:'5%',marginTop:'20px'}}>
      Get Weather
      </Button>
    </form>
          <div class="w3ls-weather">
		
		<div class="w3ls-weather-agileinfo"> 
			<div class="weather-left">
				<div class="weather-left-text">
					<h4>{this.state.city}</h4>
          <h6 style={{color:"white"}}>{this.state.country}</h6>
					<h5>{(new Date().toUTCString())}</h5>
				</div>
				<ul class="report">
					<li><a href="#">{this.state.temperature}°C</a></li>
					<li><a href="#"><span>{this.state.temperature * (9/5) + 32}</span> °F</a></li>
				</ul>
			</div>
			<div class="weather-right">
				<ul>
					<li>
						<figure class="icons">
							<canvas id="partly-cloudy-day" width="60" height="60"></canvas>
						</figure>
            <h4>Temperature</h4>
						<h3>{this.state.temperature} °C</h3>
						<div class="clear"></div>
					</li>
					<li>
						<figure class="icons">
							<canvas id="clear-day" width="40" height="40"></canvas>
						</figure>
						<div class="weather-text">
							<h4>humidity</h4>
							<h5>{this.state.humidity} %</h5>
						</div>
						<div class="clear"></div>
					</li>
					<li>
						<figure class="icons">
							<canvas id="snow" width="40" height="40"></canvas>
						</figure>
						<div class="weather-text">
							<h4>Wind</h4>
							<h5>{this.state.windspeed} km/h</h5>
						</div>
						<div class="clear"></div>
					</li>
					<li>
						<figure class="icons">
							<canvas id="partly-cloudy-night" width="40" height="40"></canvas>
						</figure>
						<div class="weather-text">
							<h4>pressure</h4>
							<h5>{this.state.pressure} mb</h5>
						</div>
						<div class="clear"></div>
					</li>
				</ul>
				<script>
					 var icons = new Skycons(),
						  list  = [
							"partly-cloudy-day"
						  ],
						  i;

					  for(i = list.length; i--; )
						icons.set(list[i], list[i]);
					  icons.play();
				</script>
				<script>
					 var icons = new Skycons(),
						  list  = [
							"clear-night","partly-cloudy-night", "cloudy", "clear-day", "sleet", "snow", "wind","fog"
						  ],
						  i;

					  for(i = list.length; i--; )
						icons.set(list[i], list[i]);
					  icons.play();
				</script>
			</div>
			<div class="clear"></div>
		</div>  
	</div>	

	<div class="copyw3-agile">
		<p> © 2019  Weather Report . All rights reserved | <a href="#" target="_blank">Design with love by PHOENIX team </a></p>
	</div>







   
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
