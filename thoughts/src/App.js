import React from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import blog from './pages/blog';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="content" class="site-content">
        <Router>
          <Switch>
            <Route exact path="/" component={blog} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
