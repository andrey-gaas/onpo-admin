import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authFetch } from '../../store/AC/auth';
import { Header } from '../../components';
import Admin from '../Admin';

function App({ authFetch }) {
  const card = localStorage.getItem('card');
  useEffect(() => {
    if (!card) {
      authFetch();
    }
  }, [authFetch, card]);

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

App.propTypes = {
  authFetch: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  authFetch,
}, dispatch);

export default connect(null, mapDispatchToProps)(App);
