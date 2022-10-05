import React, {Component} from "react";
import "tachyons";
import "../Css/App.css"
import Scroll from "../Functional Components/Scroll"
import robots from "../Data/RobotsArray";
import CardList from "../Functional Components/CardList";
import SearchBox from "../Functional Components/SearchBox"


class App extends Component{

	constructor () {
		super();
		this.state = {
			robots:robots,
			searchField:"",
		};
	}


	render(){
		const {robots, searchField} = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		});
		return(
			<div className="tc">
				<h1 className="f1">ROBOFRIENDS</h1>
				<SearchBox onSearchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}


	onSearchChange = (event) => {
		this.setState({searchField:event.target.value});
	}


}

export default App;