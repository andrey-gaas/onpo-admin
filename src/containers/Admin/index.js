import React from "react";
import { Switch, Route } from 'react-router-dom';
import { NavBar  } from '../../components';
import { Root, ContainerAdmin } from './styles';

function Admin(){
  return (
    <Root>
      <NavBar/>
      <ContainerAdmin>
        <Switch>
          <Route path="/admin/courses" render={() => <h1>course</h1>} />
          <Route path="/admin/users" render={() => <h1>users</h1>} />
          <Route path="/admin/teachers"  render={() => <h1>teachers</h1>} />
          <Route path="/admin/reviews"  render={() => <h1>review</h1>} />
        </Switch>
      </ContainerAdmin>
    </Root>
  )
}

export default Admin