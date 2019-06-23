import React from 'react';
import axios from "axios";

class Currancy extends React.Component {
    constructor(props){
        super(props);
      this.state = { 
        value:undefined,
        num:0,
        total:"0"
      }
     }
     yourdata(event){
        this.setState({[event.target.name]: event.target.value });
     }
      Click(){
         const that = this
         const value = this.state.value
         const num = this.state.num
         axios.get(`http://www.apilayer.net/api/live?access_key=c7c6be7d8dfd621f926b81c14f7473c7`)
         .then(res => {
        const cryptos = res.data.quotes
        console.log(cryptos)
        for (var key in cryptos){
            var total1 = 0
            if (key.includes(value)){
            total1 = cryptos[key] * num
            this.setState({total : total1 
 
            }); 
            }
        }
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
        let value = ["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTC","BTN","BWP","BYN","BYR","BZD","CAD","CDF","CHF","CLF","CLP","CNY","COP",
            "CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR"
            ,"ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KHW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR"
            ,"MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK",'SGD',"SHP","SLL","SOS","SRD","STD","SVC","SYP",'SZL',"THB",
            "TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH",'UGX',"USD",'UYU',"UZS","VEF","VND","VUV","WST","XAF","XAG","XAU","XCD","XDR","XOF","XPF","YER","ZAR","ZMK","ZMW","ZWL"]
        const elm = value.map((option) => {
			return <option key={option}>{option}</option>;
		});
		return (
            <div>
                <input type = "number" name = "num" onChange ={this.yourdata.bind(this)} />
                <select name="value" onChange ={this.yourdata.bind(this)}>
                    {elm}
						</select>
                <button onClick={this.Click.bind(this)} >to</button>       
                <br/>
                <h1 style={{color:'black',fontFamily:'cursive',fontSize:'50px'}}>{this.state.total}</h1>         
            </div>

		);
	}
}
export default Currancy;







  