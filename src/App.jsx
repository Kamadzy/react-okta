import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navbar from './Components/layout/Navbar';
import Home from './Components/pages/Home';
import Staff from './Components/pages/Staff';
import Login from './Components/auth/Login';

function onAuthRequired({history}){
  history.push('/login')
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer='https://dev-352090.oktapreview.com/oauth2/default'
                  client_id='0oafihu52fIOrMDAY0h7'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} >
        <div className="App">
          <Navbar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <SecureRoute path="/staff" exact={true} component={Staff} />
            <Route path='/login' render={() => <Login baseUrl='https://dev-352090.oktapreview.com' />} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
          </div>
        </div>
        </Security>
      </Router>
    );
  }
}

export default App;
