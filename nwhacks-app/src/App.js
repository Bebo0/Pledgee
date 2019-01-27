import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Login from "./containers/Login";

class App extends Component {
  render() {
    return (
      <div>

      
        {/* <p>
              Hello World!
        </p> */}

        <Router>
          {/* <Route path="/" component={Home}/> */}
          <Route path="/" component={Login}/>
        {/* <Route path="/products" component={Products}/> */}

        </Router>
        

      </div>
      
    );
  }
}

export default App;
