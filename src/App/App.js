import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';

import GoatCoral from '../components/GoatCoral/GoatCoral';

class App extends React.Component {
  state = {
    goats: [],
  }
  // outside render - this is where we do anything that modifies state

  componentDidMount() {
    const goats = goatData.getGoats();
    console.error('goats', goats);
    this.setState({ goats });
    // we write it one timebecause the key and the value are the same thing here!!!
  }
  // the next function is the one that processes the information - this one doesn't need a const (just like componentDidMount() ) - things outside of a render don't need to be delcared! we are attcahing them directly to a class (the class of App in this case) 0 basicallyliek this App.useAGoat. And then we need to set the state again - in order to refresh the page. Lastly - we need to call this funciton when the Use the goat button is clicked. ANd that's what we do by calling this int he GoatCoral component below - GoatCoral is just going to pass this function - so we go to GoatCoral and declare  the function there too.  

  useAGoat = (goatId) => {
    goatData.useGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    // this is another place where we can modify code - between render and return - we can add anything we need to modify the UI
    return (
      <div className="App">
        <h1 className='goat-title'>Simon Goat Farm</h1>
        <GoatCoral goats={this.state.goats} useAGoat={this.useAGoat} />
      </div>
    );
  }
}

export default App;
