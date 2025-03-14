import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PostsPage from './components/PostsPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={PostsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;