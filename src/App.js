import React, { Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';//destructured and got the array of robot objects
import './App.css';

// STATE - What the component needs to remember - a minimal set of those
//State can change and needs to persist for some components
//Props are just unchanging information that flows downhill

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],//robots, //the array of robot objects
			searchField: '' //initially, an empty string
		}
	}

	//a change in input occurs in SearchBox
	//SearchBox was constructed by passing a prop of the onSearchChange function object
	//SearchBox's onChange event fires and the function that runs on that event
	//is onSearchChange.
	//This is how a downhill component can send data uphill
	// Without the onSearchChange = (event) =>, 'this' is the context of what has called onSearchChange
	// which is the input element. I want 'this' to mean App.js. The wierd = (event) => syntax
	// gives me that.
	// See https://reactjs.org/docs/handling-events.html for an explanation
	//now all onSearchChange does is to change the state
	onSearchChange = (event) => {
		//to change state, always use setState()
		this.setState({ searchField: event.target.value });//passed an object
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})

		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={ filteredRobots }/>
			</div>
		);
	}
}

export default App;