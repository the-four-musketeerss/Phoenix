import React from 'react';
const bt = {
marginLeft: '10px',
width: '67px',
height: '23px',
fontSize: '13px',
padding: '1px',
marginBottom: '6px'
}

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
      // <div>
      //   <input type="text" value = {this.state.items} onChange={this.item.bind(this)}placeholder="add a new item..."></input>
      //   <button onClick={this.add.bind(this)}>add </button>
      //   {this.state.list.map((item)=>{
      //     return(
      //       <div>
      //         {/* <input type = "checkbox" value = {item.id} onClick={this.done.bind(this)}></input> */}
      //         <span>{item.text}</span>
      //         <button onClick={this.delete.bind(this)} value={item.id} > delete</button>
      //       </div>
      //     )
      //   })}
      // </div>
      //class="form-control add-todo" 
      
  render(){
    return(
      <div className=".container">
    <div className="row" style={{marginTop: '43px',marginLeft: '33px'}}>
        <div className="col-md-6">
            <div className="todolist not-done">
             <div className="checkbox">
               
                <input type="text" value = {this.state.items} onChange={this.item.bind(this)}placeholder="add a new item..." style={{width:'450px',height: '40px'}}/>
                    <button className="btn btn-dark" onClick={this.add.bind(this)} style={{marginLeft:'19px'}}>Add</button>
                    <br/>
                    </div>
                    <ul id="sortable" className="list-unstyled">
                    {this.state.list.map((item)=>{
                      return(
                        <div>
                        <br/>
                    <li className="ui-state-default">
                        <div className="checkbox">
                            <label style ={{fontSize:'25px'}}>
                                <input type="checkbox" value="" style={{zoom: '1.9'}} />{item.text}</label>
                                <button onClick={this.delete.bind(this)} value={item.id} class="btn btn-dark" style={bt}> delete</button>
                                <hr/>
                        </div>
                        
                    </li>
                    </div>
                      )
                  })}
                </ul>
            </div>
        </div>
    </div>
</div>
    )
  }
}
export default Checklist;