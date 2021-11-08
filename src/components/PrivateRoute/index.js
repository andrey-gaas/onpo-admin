import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';


function PrivateRoute({ auth, path, component }) {
  return auth ?
    <Route path={path} component={component} />
    :
    <Route
      path={path}
      render={() => {
        window.location = "https://auth.gpntbsib.ru/login";
        return null;
      }}
    />;
}

PrivateRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
};

export default PrivateRoute
