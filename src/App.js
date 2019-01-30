import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
import SearchField from './components/SearchField/SearchField';
import Scroll from './components/Scroll/Scroll';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(robot => this.setState({robots: robot}));
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className="App">
        <h1 className="f1">RoboFriends</h1>
        <SearchField onSearch={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
