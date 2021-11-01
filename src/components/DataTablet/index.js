import React from "react";
import { Root, TColHead, Row} from './styles';

import TRow from './TRow'

function DataTablet( { setting, content } ){
  const THead =  setting.map( el => ({...el, setting: el.setting ? el.setting : {} }))
  const TContent = content
  const bthWidth = 7
  const width = ( ( 95- 2*bthWidth ) - (THead.reduce( (acc, el)=> acc+= el.setting.width?el.setting.width:0 , 0 ))) / 
                (THead.length - THead.reduce( (acc, el)=> acc+= el.setting.width?1:0 , 0 ) )
  return (
    <Root>
      <Row>
        <TColHead>№</TColHead>
        {THead.map( el => {
          return (<TColHead key={"key_" + el.key} width={el.setting.width ? el.setting.width : width} >{el.text}</TColHead>)
        })}
        <TColHead width={bthWidth} >Ред.</TColHead>
        <TColHead width={bthWidth} >Удал.</TColHead>
      </Row>
      {TContent.map( (content, index) => (
        <TRow key={'row_'+index} 
              width={width} 
              content={content} 
              index={index} 
              THead={THead} 
              bthWidth={bthWidth} />
      ))}     
    </Root>
  )
}

export default DataTablet