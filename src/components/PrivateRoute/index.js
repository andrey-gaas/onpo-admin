import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';


function PrivateRoute({ auth, path, component }) {
  const url = process.env.NODE_ENV === 'production' ?
    'https://auth.gpntbsib.ru/login?redirect_url=https://onpo-admin.gpntbsib.ru/'
    : 'https://auth.gpntbsib.ru/login?redirect_url=http://localhost:3000';

  return auth ?
    <Route path={path} component={component} />
    :
    <Route
      path={path}
      render={() => {
        window.location = url;
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
