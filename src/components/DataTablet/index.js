import React from "react";
import { Root, TRow, TCol} from './styles';

function DataTablet( { setting, content } ){
  const THead =  Object.keys(setting)
  const TContent = content.map( el => ({...el, button:el.id}) )
  const width = 95/THead.length
  return (
    <Root>
      <TRow>
        <TCol>№</TCol>
        {THead.map( el => {
          return (<TCol key={setting[el]} width={width} >{setting[el]}</TCol>)
        })}
      </TRow> 
      {TContent.map( (content, index)=> { return (<TRow key={'row'+index}>
        <TCol>{index}</TCol>
        {THead.map( key => { return (
          <TCol key={'id'+content.id} width={width} >{content[key]}</TCol>
        )})}
      </TRow>)} )
      }     
    </Root>
  )
}

export default DataTablet