import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import UserPage from './UserPage';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/user">
            <UserPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
