import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from '../../components';
import Admin from '../Admin';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <h1>MAIN PAGE</h1>} />
        <Route path="/page2" render={() => <h1>PAGE 2</h1>} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Fragment>
  );
}

export default App;
