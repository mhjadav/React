import React, { Component} from "react";
import Popular from "./Popular"

class App extends Component {
	render() {
		return (
			<div className="container"> 
			<Popular name={this.props.name}/>
			</div>
		)
	}
}

module.exports = App;