import React from 'react';
// import axios from "axios"

class Currancy extends React.Component {
    constructor(props){
        super(props);
      this.state = { 
          cryptos:[]           
      }
     }
    //  componentDidMount(){
    //      axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR")
    //      .then(res => {
    //     const cryptos = res.data 
    //     console.log(cryptos)
    //     this.setState({cryptos : cryptos});

    //      })
    //  }
  
	// render() {
	// 	return (
    //         <div>
    //         {Object.keys(this.state.cryptos).map((key) => (
    //             <div>
    //             <span>{key}</span>
    //             <span>{this.state.cryptos[key].USD}</span>

    //             </div>
    //         ))}
    //         </div>

	// 	);
	// }
}
export default Currancy;
