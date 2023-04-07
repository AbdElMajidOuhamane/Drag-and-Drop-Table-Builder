import { Container,Grid } from '@mui/material'
import React from 'react'

const RightSideDrag = (props) => {
  return (
    <Container>
        <Grid backgroundColor="#F5F5F5"
         height="100%"
         fontSize="20px"
         padding="30px"
          item xs={6}
          onDrop={props.handleOnDrop}
           onDragOver={props.handleDragOver}
          
          >
              {props.inputs.map((input,index)=>{
                return(
                  <div key={index}>
                      {input}
                  </div>
                )
              })}
        </Grid>
    </Container>
  )
}

export default RightSideDrag