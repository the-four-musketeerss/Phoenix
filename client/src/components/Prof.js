import React from 'react';
import './prof.css'
const styles = {
 
    backgroundColor: '#00ffff',
    ':hover':  {
      cursor: 'pointer',
      backgroundColor: 'red'
    }
  
}
class Prof extends React.Component{
  constructor(props){
        super(props);
      this.state = { 
          books:[]           
       
      }
  }
  
    // componentDidMount(){
    //   fetch("post/")
    //     .then(data => data.json())
    //     .then((data) => {
    //       this.setState({ books: data })
    //      })
    //   }

      componentDidMount(){
      fetch("post/")
        .then(data => data.json())
        .then((data) => {
        for (var i = 0 ; i < data.length ; i++){
            if(data[i].username === this.props.username){
               this.setState({ books: data[i] }
               )}

        }
            
         })
      }

  
     render(){
      return(
            <div className="container">
              <div className="size">
                <img id = "a"
                src={
                  this.state.books.url ||
                  'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435'
                }
              alt="uploaded image"
              className="image"
              />
              <div className="overlay">
                <div className="text">
                  <h1 style={{color:'white',fontFamily:'cursive',fontSize:'50px'}}>Name:{this.state.books.username}</h1>
                  <h2 style={{color:'white',fontFamily:'cursive',fontSize:'40px'}}>Email:{this.state.books.email}</h2>
                  <h3 style={{color:'white',fontFamily:'cursive',fontSize:'50px'}}>Bio:{this.state.books.bio}</h3>
                </div>
              </div>
              </div>
           </div>
    )}
  }
export default Prof;
