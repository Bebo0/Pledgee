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
          <Route path="/login" component={Login}/>
          {/* <Route path="/dashboard" component={Dashboard}/> */}
        {/* <Route path="/products" component={Products}/> */}

        </Router>

        <Router>
          <Route exact path="/" component={Home}/>

        </Router>
        

      </div>
      
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

export default App;
