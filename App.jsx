import React from 'react';
import Home from './Home';
import About from './About';

const App=()=>{
  return(
    <div>
      <h2>Welcome To My Website</h2>
          <div>
            <Home/>
            <About/>
          </div>
    </div>
  )
}
export default App;