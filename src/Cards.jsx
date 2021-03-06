import React, { Component } from 'react';
import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'
import './Cards.css'

class Cards extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (
			<div className="tc">
				<h1 className="f2">RoboFriends</h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<CardList robots = {filteredRobots}/>
			</div>
		)
	}
}
 
export default Cards