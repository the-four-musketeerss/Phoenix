import React from 'react';

class Checklist extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        items:[]
      }
  }
  render(){
    return(
      <div>
        <section class="container vert-offset-top-2">
            <div id="todoBox" class="todoBox col-xs-6 col-xs-offset-3"></div>
        </section>
      </div>
    )
  }
}
export default Checklist;