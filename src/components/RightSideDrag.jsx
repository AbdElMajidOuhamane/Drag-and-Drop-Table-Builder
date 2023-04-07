import { Container,Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const RightSideDrag = (props) => {
  return (
    <Container>
        <Grid
         height="100%"
         fontSize="20px"
         
          item xs={6}
          onDrop={props.handleOnDrop}
           onDragOver={props.handleDragOver}
          >
              {props.inputs.map((input,index)=>{
                return(
                    <Box key={index} textAlign="center" padding="15px" marginBottom="12px" component="span" sx={{ display: 'block',border: 1,borderColor:"#87CEFA",color:"#1E90FF" }}>
                        {input}
                    </Box>
                
                )
              })}
        </Grid>
    </Container>
  )
}

export default RightSideDrag