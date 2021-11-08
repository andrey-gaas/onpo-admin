import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authFetch } from '../../store/AC/auth';
import { Header, PrivateRoute } from '../../components';
import Loading from '../Loading';
import Admin from '../Admin';

function App({ authFetch, isAuth, loading }) {

  useEffect(() => {
    authFetch();
  }, [authFetch]);

  return (
    <Fragment>
      <Header />
      { loading && <Loading /> }
      {
        loading === false &&
          <Switch>
            <PrivateRoute exact path="/" component={() => <h1>MAIN PAGE</h1>} auth={isAuth} />
            <PrivateRoute path="/admin" component={Admin} auth={isAuth} />
          </Switch>
      }
    </Fragment>
  );
}

App.propTypes = {
  authFetch: PropTypes.func.isRequired,
  isAuth:    PropTypes.bool.isRequired,
  loading:   PropTypes.bool,
};

const mapStateToProps = ({ auth }) => ({
  isAuth: auth.isAuth,
  loading: auth.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  authFetch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
