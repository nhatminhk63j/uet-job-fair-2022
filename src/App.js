import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Company from './pages/Company';
import ListCompanies from './pages/ManageCompany/ListCompanies';
import EditCompany from './pages/ManageCompany/EditCompany';

const browserHistory = createBrowserHistory();

function App() {
  return (<div className={'App'}>
    <Router history={browserHistory}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/sponsors/:id" exact>
          <Company />
        </Route>
        <Route path="/management/sponsors" exact>
          <ListCompanies />
        </Route>
        <Route path="/management/sponsors/:id" exact>
          <EditCompany />
        </Route>
      </Switch>
    </Router>
  </div>);
}

export default App;
