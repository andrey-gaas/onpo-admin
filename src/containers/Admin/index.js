import React from "react";
import { Switch, Route } from 'react-router-dom';
import Reviews from '../Reviews';
import { NavBar } from '../../components';
import { Root, ContainerAdmin } from './styles';
/* import Users from "../Users" */

function Admin(){
  

  return (
    <Root>
      <NavBar/>
      <ContainerAdmin>
        <Switch>
          <Route path="/admin/courses" render={() => <h1>course</h1>} />
          {/* <Route path="/admin/users" component={ Users } /> */}
          <Route path="/admin/teachers"  render={() => <h1>teachers</h1>} />
          <Route path="/admin/reviews"  component={Reviews} />
        </Switch>
      </ContainerAdmin>
    </Root>
  )
}

export default Admin