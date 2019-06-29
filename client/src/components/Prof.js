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
          books:[],
          blogs:[]           
       
      }
  }
  


      componentDidMount(){
      fetch("/post")
     
        .then(data => data.json())
        .then((data) => {
      
        for (var i = 0 ; i < data.length ; i++){
            if(data[i].username === this.props.username){
               this.setState({ books: data[i] },()=>{
                this.blogs()
      }
               )}

        }
            
         })
      }
      blogs(){
        var that = this
        fetch("/blogs")
        .then(data => data.json())
        .then((data) => {
          console.log(this.state.books.id)
          console.log(data[0].ProfileId)
          var arr = []
          for (var i = 0 ; i < data.length ;i++){
            if (data[i].ProfileId === this.state.books.id){
              arr.push(data[i])
            }
          }
          that.setState({blogs:arr})
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
             <h1> blogs</h1>
              <table>
                    <tbody>
                        {this.state.blogs.map((blog, i) => (
                      <tr
                        key={blog.id}
                        style={{
                          margin: '10px',
                          display: 'block',
                          color: 'black',
                          fontSize: '20px',
                          borderStyle: 'solid',
                          padding: '15px'
                        }}
                          >
                        <span style={{ color: '#FA3905', fontSize: '18px'}}>
                          <strong>Blog title:</strong>
                        </span>
                        <span>{blog.title}</span>
                        <span style={{ color: '#FA3905', fontSize: '18px' ,marginLeft:'20px'}}>
                          <strong>country:    </strong>
                        </span>
                        <span>{blog.country}</span>
                        <span style={{ color: '#FA3905', fontSize: '18px' ,marginLeft:'20px'}}>
                          <strong>Blog:  </strong>
                        </span>
                          <span>{blog.Blog}</span>
                        </tr>
                      ))}
                    </tbody>
                </table>
             
           </div>
    )}
  }
export default Prof;

