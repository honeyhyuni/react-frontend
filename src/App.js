import React from 'react';
import PropTypes from "prop-types";
import 'App.css';
import Counter from "Counter";
import Message from 'Message';
import Profile from 'Profile';

// 이벤트 헨들러 속성명은 camelCase

class App extends React.Component{
  render(){
    return(
        <div>
          <Profile/>
          <Message/>
          <Counter />
          <Counter color="green"/>
          <Counter color="blue"/>
        </div>
    );
  }
}

export default App;