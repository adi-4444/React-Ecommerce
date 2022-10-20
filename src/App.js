import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import LandingPage from './pages/landingpage/LandingPage';


function App() {
  return (
    <Router>
    <div className="App">
      <LandingPage />
    </div>
    </Router>
  );
}

export default App;
