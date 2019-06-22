import React from 'react';
import axios from "axios"

class Currancy extends React.Component {
    constructor(props){
        super(props);
      this.state = { 
          cryptos:undefined,
          type1 :undefined,
          type2 :undefined,
          num1 :undefined,
          num2 :undefined
      }
     }
     yourdata(event){
        this.setState({[event.target.name]: event.target.value });
     }
      Click(){
         const type1 = this.state.type1
         const type2 = this.state.type2
         const num1 = this.state.num1
         const num2 = this.state.num2
         axios.get(`http://www.apilayer.net/api/live?access_key=e73c927d0f245c8eaf7c98cd347a329b&currencies&from=${type1}&to=${type2}&amount=${num1}&format=1`)
         .then(res => {
        const cryptos = res.data 
        console.log(cryptos)
        // this.setState({cryptos : cryptos});
         })
     }


// Click(){

//          axios.get(`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR`)
//          .then(res => {
//         const cryptos = res.data 
//         console.log(cryptos)
//          })
//      }
  
	render() {
		return (
            <div>
                <input type = "text" name = "USD" onChange ={this.yourdata.bind(this)} />
                <input type = "text" name = "CAD" onChange ={this.yourdata.bind(this)} />
                <input type = "text" name = "PLN" onChange ={this.yourdata.bind(this)} />
                <input type = "text" name = "MXN" onChange ={this.yourdata.bind(this)} />
                <button onClick={this.Click.bind(this)} >to</button>
            </div>

		);
	}
}
export default Currancy;





  
