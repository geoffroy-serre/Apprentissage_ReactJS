import React, {Component} from 'react';
import './App.css';
import {SearchBox} from './components/search-box/search-box';
import {CardList} from './components/card-list/card-list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
            .then((r) => r.json())
            .then((users) => this.setState({monster: users}))
            .catch((e) => console.log('Error getting users'));
  }

  render() {
    const {monster, searchField} = this.state;
    const filterMonsters = monster.filter((monsta) => monsta.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
            <div className="App">
              <SearchBox placeholder="Search monster"
                         handleChange={(e) => this.setState({searchField: e.target.value})}/>
              <CardList monster={filterMonsters}/>
            </div>
    );
  }
}

export default App;
