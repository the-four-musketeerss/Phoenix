
import React from 'react';
import { Redirect } from 'react-router-dom'
import { browserHistory } from 'react-router';

class Blogs extends React.Component{
    constructor(props){
          super(props);
        this.state = {
          books: [],
          search:""	,
          newbook:"",
          redirect:false
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
    prof(){
      console.log(this.state.newbook)
      this.setState({
        redirect:true
      })
    }

    renderRedirect = () =>{
      if(this.state.redirect){
        // return <Redirect to ='Profile' />
        return <Redirect to = {{
          pathname:"Profile/",
          state:{newbook:this.state.newbook}
        }} />
      }
    }

     render(){
       let filtered =this.state.books.filter(
         (book) =>{
           return book.country.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
         }
       )
      return(<div>
            {this.renderRedirect()}
            <h1>{this.props.username}</h1>
            <input icon="search" label="Search Country" onChange= {this.Search.bind(this)} placeholder="Sarch for country" />
              {filtered.map(book =>
                
                <div key={book.id} onClick = {(e) => {
                  this.setState({newbook:book},()=>{
                    this.prof()
                  });
                }}>
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
  