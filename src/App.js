import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/NavigationBar';
import MainPage from './components/MainPage';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Navbar />
                <MainPage />
            </div>
        </Router>
    );
  }
}

export default App;
