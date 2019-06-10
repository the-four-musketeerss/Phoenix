
import React from 'react';

class Blogs extends React.Component{
    constructor(props){
          super(props);
        this.state = {
          books: [],
          search:""			
        }
    }
    Search(event){
      this.setState({
        search : event.target.value
      })
    }
    componentDidMount(){
      
      fetch("blogs/")
        .then(data => data.json())
        .then((data) => {
           console.log(data)
          this.setState({ books: data })
         })
      }
    
  
     render(){
       let filtered =this.state.books.filter(
         (book) =>{
           return book.country.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
         }
       )
      return(<div>
          
            <input icon="search" label="Search Country" onChange= {this.Search.bind(this)} placeholder="Sarch for country" />
              {filtered.map(book =>
                <div key={book.id}>
                  <img src={book.image} width="100" height="100"/><br />
                  name : {book.UserId}<br/>
                  title :{book.title}<br />
                  country:{book.country}<br />
                  Blog:{book.Blog}
                </div>
                )}
        </div>
    )}
  }
  
  export default Blogs;
  