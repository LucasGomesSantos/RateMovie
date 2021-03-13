import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import RepositoryList from '../components/RepositoryList';
  import RepositoryDetails from '../components/RepositoryDetails';
  import SignIn from '../pages/SignIn';

  const routes: React.FC = () => (
  <Switch>
      <Route path="/RepositoryList" exact component={RepositoryList}></Route>
      <Route path="/RepositoryDetails:id" exact component={RepositoryDetails}></Route>
      <Route path="/" exact component={SignIn}></Route>
  </Switch>    
  );

  export default routes;

