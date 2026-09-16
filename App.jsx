import React from 'react';
import Home from './Home';
import Placements from './Placements';

class App extends React.Component {
  render() {
    return (
    <div> <h1>App Class Component!</h1>
    <div>
      <Home/>
      <Placements/>
    </div>
    </div>
    )
  }

}

export default App;