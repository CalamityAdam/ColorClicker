import React from 'react';
import './App.css';
import Clicker from './Clicker'

class App extends React.Component {
  state = {
    colorChosen: 'red'
  }
  
  handleClick = (color) => {
    this.setState({
      colorChosen: color
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clicker colorChosen={this.state.colorChosen} />
          <button 
            type="button" 
            disabled={this.state.colorChosen === 'red'} 
            onClick={() => this.handleClick('red')}
          >
            Change Color to Red
          </button>
          <button 
            type="button" 
            disabled={this.state.colorChosen === 'blue'} 
            onClick={() => this.handleClick('blue')}
          >
            Change Color to blue
          </button>
        </header>
      </div>
    );
  }
}

export default App;
