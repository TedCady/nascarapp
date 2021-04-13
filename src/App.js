import './App.css';
import { navigate, Router } from '@reach/router';
import { React, useState } from 'react';
import NascarList from './components/NascarList';
import Info from './views/Info';
import Series from './components/Series';
import 'bootstrap/dist/css/bootstrap.min.css';





function App(props) {
const [getDriver, setDriver] = useState({});


  return (
    <div className="App">

    <Router>
      <NascarList path = "/"/>
      <Info path = '/driver/:id'/>
      <Series path = '/series'/>
    </Router>
    
    </div>
  );
}

export default App;