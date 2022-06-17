import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'antd/dist/antd.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Company from './pages/Company';
import ListCompanies from './pages/ManageCompany/ListCompanies';
import EditCompany from './pages/ManageCompany/EditCompany';

const browserHistory = createBrowserHistory();

function App() {
  return (<div className={'App'}>
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={HomePage}>
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
    </BrowserRouter>
  </div>);
}

export default App;
