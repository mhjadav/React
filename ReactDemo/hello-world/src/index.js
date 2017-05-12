import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

import './index.css';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

function formatUser(user){
	if(user) {
		return <h1>Hello, {user.firstName + ' ' + user.lastName}</h1>;
	} else {
		return <h1>Hello, Stranger</h1>;
	}
}

const user = {
	firstName:'Mahipatsinh',
	lastName:'Jadav'
}

class Clock extends Component {

    constructor (props){
      super(props)
      this.state = {date : new Date()};
      this.start = this.start.bind(this); 
       this.stop = this.stop.bind(this); 
    }

    componentDidMount(){
      this.start();
    }

    stop(){
      clearInterval(this.timerID);
    }

    start(){
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount(){
      this.stop();
    }

    tick() {
      this.setState ({
        date : new Date()
      });
    } 

    render() {
      return (
        <div>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <Toggle start={this.start} stop={this.stop} />
        </div>
      )
    }
}

class Toggle extends Component {

    constructor (props) {
        super(props);
        this.state = { isToggleStart: true };
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(){
        this.setState(prevState => {
          if(prevState.isToggleStart){
            this.props.stop();
          } else {
            this.props.start();
          }

          return {
            isToggleStart : !prevState.isToggleStart
          }
        });
          
      }
      render() {
        return (
          <button onClick={this.handleClick}>
            {this.state.isToggleStart ? 'Stop' : 'Start'}
          </button>
        );
    }

}

ReactDOM.render(
	<div>
    {formatUser(user)}
    <Clock/>
  </div>,
	document.getElementById('root')
);

