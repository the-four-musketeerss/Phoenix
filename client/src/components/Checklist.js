import React from 'react';

class Checklist extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        items:"",
        list:[],
        done:false
      }
  }
  item(e){
    this.setState({
      items:e.target.value
    })
  };
  done(e){
    this.setState({
      done:e.target.checked
    },()=>console.log(e))
  }
  delete(e){
    var that=this;
    console.log(e.target.value)
    fetch(`TravelList/${e.target.value}/`, {
      
      method: "DELETE",
      headers : {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"pk":e.target.value})
    }).then((response) => response.json())
    .then((data)=>{
      console.log(data)
      
    }).then(function(){
      console.log('get')
        fetch('TravelList/')
        .then(data => data.json())
        .then((data) => { that.setState({ list: data },()=>console.log(that.state.list))
        that.setState({items:""}) 
      }); 
      }).catch(function(err){
        return (err)
      })
  }
  componentDidMount(){
    var that=this;
    fetch('TravelList/')
    .then(data => data.json())
    .then((data) => { that.setState({ list: data },()=>console.log(that.state.list))
   }); 
  }
  add=()=>{
    var that=this;
    fetch("TravelList/", {
      
      method: "POST",
      headers : {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"text":that.state.items,"done":that.state.done})
    }).then((response) => response.json())
    .then((data)=>{
      console.log(data)
      
    }).then(function(){
      console.log('get')
        fetch('TravelList/')
        .then(data => data.json())
        .then((data) => { that.setState({ list: data },()=>console.log(that.state.list))
        that.setState({items:""}) 
      }); 
      }).catch(function(err){
        return (err)
      })
  }

  render(){
    return(
      <div>
        <input type="text" value = {this.state.items} onChange={this.item.bind(this)}placeholder="add a new item..."></input>
        <button onClick={this.add.bind(this)}>add </button>
        {this.state.list.map((item)=>{
          return(
            <div>
              {/* <input type = "checkbox" value = {item.id} onClick={this.done.bind(this)}></input> */}
              <span>{item.text}</span>
              <button onClick={this.delete.bind(this)} value={item.id} > delete</button>
            </div>
          )
        })}
      </div>
    )
  }
}
export default Checklist;