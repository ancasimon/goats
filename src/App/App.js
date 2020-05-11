import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';

class App extends React.Component {
  // outside render - this is where we do anything that modifies state

  componentDidMount() {
    const goats = goatData.getGoats();
    console.error('goats', goats);
  }

  render() {
    // this is another place where we can modify code - between render and return - we can add anything we need to modify the UI
    return (
      <div className="App">
        <h1 className='goat-title'>Simon Goat Farm</h1>
        <button className="btn btn-dark">Click Here</button>
      </div>
    );
  }
}

export default App;
