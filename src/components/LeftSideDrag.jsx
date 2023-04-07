import { Button, TextField } from '@mui/material'
import { Box, Container } from '@mui/system'


const LeftSideDrag = (props) => {


    const openHandler=()=>{
        props.setIsInputOpen(!props.isInputOpen)
    }
  return (
    <Container>
        <Box sx={{display: 'grid',
              gap: 1,
              gridTemplateColumns: 'repeat(1, 1fr)'}}>
        <Button variant="outlined" onClick={openHandler} >{props.isInputOpen ?"REMOVE":"ADD"}</Button>
          {props.isInputOpen && <TextField  id="outlined-basic" label="Enter the name"
           variant="outlined"
           onChange={props.handlerChange}
           draggable
           onDragStart={(e)=>props.handlerOnDrag(e,props.changeValue)} />}
          </Box>
    </Container>
  )
}

export default LeftSideDrag