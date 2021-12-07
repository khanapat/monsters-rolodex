import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       string: "BOBO TRUST"
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>{this.state.string}</p>
//           <button onClick={() => this.setState({ string: "HELLO TRUST" })}>
//             Change Text
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        {/* <input
          type="search"
          placeholder="search monsters"
          onChange={e => {
            this.setState({ searchField: e.target.value }, () => console.log(this.state))
          }}
        /> */}
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={e => {
            this.setState({ searchField: e.target.value }, () => console.log(this.state))
          }}
        />
        <CardList
          monsters={filteredMonsters}
        />
      </div>
    );
  }
}


export default App;
