import React, { Component } from "react";
import ReactDom from  "react-dom";
import "./index.css";


//State
//Lifecycle events - load, removed
class App extends Component {
	render() {
		return (
			<div> My Name is Mahipat </div>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'));