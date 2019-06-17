import React from 'react';

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
            <div>
             <h1>profile</h1>
              <img id = "a"
              src={
                this.state.books.url ||
                'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435'
              }
            alt="uploaded image"
            />
             <h1>{this.state.books.username}</h1>
             <h1>{this.state.books.email}</h1>
             <h1>{this.state.books.bio}</h1>
           </div>
    )}
  }
export default Prof;

