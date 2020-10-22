import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. Hello there!
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



class App extends Component{
  constructor(){   //Calls the constructor
    super();       // Calls the super class constructor
    this.state = {
        monsters:[],
        searchField:''      
    }
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters : users}))
  }

  handleChange = (e) =>{
    this.setState({searchField: e.target.value})
  }

  render(){
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    //Inside return JSX is used
    return(
      <div className="App">
          <h1>Monsters Rolodex</h1>
          <SearchBox 
            placeholder = 'search monsters'
            handleChange = {this.handleChange}
          />
          <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
