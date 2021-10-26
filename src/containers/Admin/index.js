import React from "react";
import { Switch, Route } from 'react-router-dom';
import Reviews from '../Reviews';
import { NavBar, DataTablet  } from '../../components';
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
          <Route path="/admin/reviews"  component={Reviews} />
        </Switch>
        {/* <DataTablet 
          setting={{ id: "ID", name:"Имя", button:'Кнопка'}} 
          content={[{id:1,name:'Нуждин А. И.'},{id:2,name:'Гаас А. А.'},{id:3,name:'Сергеев А. А.'}]}
          width={"50"}
        /> */}
      </ContainerAdmin>
    </Root>
  )
}

export default Admin