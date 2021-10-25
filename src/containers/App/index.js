import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { Header } from '../../components';
import { authFetch } from '../../store/AC/auth';
import Admin from '../Admin';

function App({ authFetch }) {

  const handleClick = () => {
    authFetch();
  };

  return (
    <Fragment>
      <Header />
      <button onClick={handleClick}>123</button>
      <Switch>
        <Route exact path="/" render={() => <h1>MAIN PAGE</h1>} />
        <Route path="/page2" render={() => <h1>PAGE 2</h1>} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Fragment>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators({
  authFetch,
}, dispatch);

export default connect(null, mapDispatchToProps)(App);
