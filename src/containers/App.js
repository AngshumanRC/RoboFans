import React,{Component} from'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import Popup from '../components/Popup';


class App extends Component{
	constructor(){
		super();
		this.state={
			message:'Robofans',
			robots:[],
			searchfield:'',
			popup: false

		}
		
	}

	

	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value});
	}
    
	
	componentDidMount(){
		

		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json();
		})
		.then(users=>{
			this.setState({robots:users});
		})
	}

	openPopup=()=>{
		this.setState({popup:true});

	}

	closePopup=()=>{
		this.setState({popup:false});
	}
	


	render(){
		// const {robots,searchfield}=this.state; than we can robots in place of this.state.robots and searchfield in place of this.state.searchfield, this is called destructuring.

		const filteredRobots=this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return !filteredRobots ?
		<h1>Loading.......</h1>:
		
	 (
	 <React.Fragment>
	    {this.state.popup ? <Popup closePopup={this.closePopup}/> : ""}
		<div className="tc">
		<h1>{this.state.message}</h1>
		<button onClick={this.openPopup}>Open popup</button>
	    <SearchBox searchChange={this.onSearchChange}/>
	    <Scroll>
		<CardList robots={filteredRobots}/>
		</Scroll>
		

		</div>
		</React.Fragment>

		)

		}
	
}




{
// class App extends Component{
// 	constructor(){
// 		super();
// 		this.state={
// 			name:"Angshu"
// 		}
// 		console.log("Inside constructor!");
// 	}
// 	componentWillMount(){
// 		console.log("Inside component will mount");
// 		setTimeout(()=>{
// 			this.setState({name:"Arafat"});
// 		},3000);

// 	}

// 	componentDidMount(){
// 		console.log("Inside component did mount");
// 		setTimeout(()=>{
// 			this.setState({name:"Rekha"});
// 		},1000);

// 	}
// 	render(){
// 		console.log("Inside render");
// 		return(
// 			<h1>Hello world thuis is {this.state.name}</h1>
// 			);
// 	}

// }
}

export default App;


