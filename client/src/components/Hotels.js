import React from 'react';

class Hotels extends React.Component{
    constructor(props){
          super(props);
        this.state = {
          hotels:[]
        }
    }
  
    componentDidMount(){
      fetch("hotels/")
        .then(data => data.json())
        .then((data) => {
           console.log(data)
           this.setState({ hotels: data })
         }).catch((err)=>{
          console.log(err)
         })
    }
  
    render(){
      return(<div>
           {this.state.hotels.map(hotel =>
        <div>
                <div className="card" style={{height:"39rem" ,width: "18rem" ,float:"left",margin:"10px"}}>
                  <img className="card-img-top" src={hotel.image} alt="Card image cap" height="200" width="42"/>
                  <div className="card-body">
                    <h5 className="card-title">{hotel.name}</h5>
                    <p className="card-text">Country:{hotel.country}</p>
                    <p className="card-text">Phone:{hotel.phone}</p>
                    <p className="card-text">Rating:{hotel.rating} stars</p>
                    <p className="card-text">Price:{hotel.price}</p>
                    <p className="card-text">description:{hotel.desc}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
        </div>
            )}
        </div>
    )}
  }
  
  export default Hotels;
  