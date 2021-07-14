import {Component} from 'react';
import './App.css';


class App extends Component {

    constructor() {
        super();
        this.state = {
            monster: []
        };
    }

    componentDidMount() {
        fetch('https://jsonpaceholder.typicode.com/users')
                .then(r => r.json())
                .then(users => this.setState({monster: users}))
                .catch(e => console.log('Error getting users'));
    }

    render() {
        return (
                <div className="App">
                    <header className="App-header">
                        {
                            this.state.monster.map(user => (
                                            <h1 key={user.id}>{user.address.city}</h1>
                                    )
                            )
                        }
                    </header>
                </div>
        );
    }
}

export default App;
