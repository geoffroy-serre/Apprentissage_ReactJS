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

  // Utiliser une fonction fléchée permet de me bind automatiquement this a App. Sans cela il faut bind this dans le
  // constructeur. Ou utiliser une fonction fléchée a son appel.
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  };

  render() {
    const {monster, searchField} = this.state;
    const filterMonsters = monster.filter((monsta) => monsta.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
            <div className="App">
              <h1 className="title">Monsters Rolodex</h1>
              <SearchBox placeholder="Search monster"
                      // si handle change n'était pas une fonction fléchée et non bind dans le constructeur ,
                      // l'appel devrais être : handleChange = {(e) => {this.handleChange(e)}
                      // ATTENTION: appeller this.handleChange() avec les () appellera la fonction des le render,
                      // changement ou non. Sur un bouton ce type de code fera comme si on avais cliqué sur le
                      // bouton et cliquer sur le bouton ne produirais rien.
                         handleChange={this.handleChange}/>
              <CardList monster={filterMonsters}/>
            </div>
    );
  }
}

export default App;
