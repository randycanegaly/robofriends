import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from './robots';
import './App.css';
import { useState } from 'react';
import { useEffect } from "react";
import ErrorBoundary from '../components/ErrorBoundary';


// STATE - What the component needs to remember - a minimal set of those
//State can change and needs to persist for some components
//Props are just unchanging information that flows downhill

export default function App () {

	const [bots, setBots] = useState([]);
  	const [searchField, setSearch] = useState('');

  	const filteredRobots = bots.filter(robot => {
  		// console.log('filteredRobots');
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})

  	function handleSearchChange(event) {
  		// console.log('handleSearchChange');
    	setSearch(event.target.value);
  	}

  	// set the initial list of robots by going to the website
   	useEffect(() => {//ToDo: Study useEffect()
  		fetch('https://jsonplaceholder.typicode.com/users')
  			.then( response => response.json())
  			.then( users => setBots(users));//uses the bots setting callback to set bots
			// .then( users => {});
	}, []);

	if(!bots.length) {
		return <h1>Loading</h1>
	} else {
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={handleSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={ filteredRobots }/>
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}