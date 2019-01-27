import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';
import { routes } from './routes';

function configureStore(initialState) {
      const enhancer = compose(applyMiddleware(thunkMiddleware));
      return createStore(reducers, initialState, enhancer);
}

const store = configureStore({});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          decision1: null,
          decision2: null,
        };
      }

  // ------------------------------------------------------
  // Helper functions to be passed to props
  // ------------------------------------------------------

  setDecision1(bool) {
    this.setState({decision1: bool})
  }
  setDecision2(bool) {
    this.setState({decision2: bool})
  }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        {routes.map((route, index) => {
                            return <Route key={index} path={route.path} component={route.component} exact={route.exact} setDecision1={this.setDecision1.bind(this)} setDecision2={this.setDecision2.bind(this)}/>
                        })}
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
