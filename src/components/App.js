import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
//import slugify from 'slugify';
import './App.css';
import First from './First/First'
// This object will allow us to
// easily convert numbers into US dollar values

class App extends Component {
  render() {
    return(
   <div className="App">
     
     <First />
     
    
   
   </div>
    )
}
}
export default App;
