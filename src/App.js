import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Results from './Pages/Results';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
				<Route path="/results/:q/:r" component={Results} />
    </Router>    
  );
}

export default App;
