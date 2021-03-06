import React from "react";
import { Switch, Route } from 'react-router-dom';
import Reviews from '../Reviews';
import Users from '../Users';
import Teachers from '../Teachers';
import Courses from '../Courses';
import { NavBar } from '../../components';
import { Root, ContainerAdmin } from './styles';


function Admin(){
  

  return (
    <Root>
      <NavBar/>
      <ContainerAdmin>
        <Switch>
          <Route path="/admin/courses" component={Courses} />
          <Route path="/admin/users" component={Users} />
          <Route path="/admin/teachers"  component={Teachers} />
          <Route path="/admin/reviews"  component={Reviews} />
        </Switch>
      </ContainerAdmin>
    </Root>
  )
}

export default Admin