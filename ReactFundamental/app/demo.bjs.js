import React, { Component } from "react";
import ReactDom from  "react-dom";
import Proptypes from "prop-types";

import "./index.css";

class App extends Component {
	render() {
		return (
			<div> My Name is {this.props.name} <br/>
				<Friends />
			</div>

		);
	}
}

class Friends extends Component {
	render() {
		var name = "Mahipat";
		var friends = "Mahipat,Hello ";
		return (
			<div>
				<h3> Name : {name} </h3>
				<ShowList friends={friends} />
			</div>
		)
	}
}

class ShowList extends Component {
	render() {
		var friends = this.props.friends.filter(function(f){
			if(f.friend){
				return true;
			}
		});
		var notFriends = this.props.friends.filter(function(f){
			if(!f.friend){
				return true;
			}
		});
		return (
			<div>
				<h3>Not Friends </h3>
				<ul>
					{notFriends.map(function(friend){
						return <li key={friend.name}> {friend.name} </li>;
					})}
				</ul>
				<h3> Friends </h3>
				<ul>
					{friends.map(function(friend){
						return <li key={friend.name}> {friend.name} </li>;
					})}
				</ul>
			</div>
		)
	}
}

ShowList.propTypes = {
	friends:Proptypes.array.isRequired
}

ReactDom.render(
	<App name="Hero"/>,
	document.getElementById('root')
);