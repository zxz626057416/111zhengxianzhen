import React from 'react';
import './App.css';
import MessageList from './container/MessageView.js';
import FooterList from './container/FooterView.js';






class App extends React.Component {

constructor(props){
  super(props);
  this.state={

    

  }
}







  render(){
    return(
      <div className="main">
       <MessageList/>
        <div className="footer">
        <FooterList/>
        </div>



      </div>
    );
  }
}
export default App;
