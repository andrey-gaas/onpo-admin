import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import { Root, TCol, Btn, Image, BtnContainer} from './styles';
import editSrc from '../../../images/edit.svg';
import removeSrc from '../../../images/remove.svg';
import UserData from "../UserData"

function TRow( { index, content, THead, bthWidth, width } ){

  const [ isOpen, setOpen ] = useState(false);

  return (
    <Root>
      {!isOpen && <>
        <TCol>{index}</TCol>
        {THead.map( (el, ind) => { return (
          <TCol 
            key={'ind_key'+ind+content.id} 
            width={el.setting.width ? el.setting.width : width}
          >{ 
            content[el.key] 
          }</TCol>
        )})}
        <TCol width={bthWidth} >
          <Btn className={"yellow"} onClick={ _ => { setOpen( !isOpen )}}>
            <Image src={editSrc} alt="" />
          </Btn>
        </TCol>
        <TCol width={bthWidth} >
          <Btn className={"red"}>
            <Image src={removeSrc} alt="" />
          </Btn>  
        </TCol> 
      </>}
      {isOpen && <>
        <Switch>
          <Route path="/admin/courses" render={() => <h1>course</h1>} />
          <Route path="/admin/users" component={ UserData }  />
          <Route path="/admin/teachers" render={() => <h1>teachers</h1>} />
          <Route path="/admin/reviews" render={() => <h1>Review</h1>}  />
        </Switch>
        <BtnContainer>
          <Btn className={"width_norm"}>
            Cохранить
          </Btn>
          <Btn  className={"width_norm"} onClick={ _ => { setOpen( !isOpen )}}>
            Отмена
          </Btn>
        </BtnContainer>
      </>}
    </Root>
  )
}

export default TRow