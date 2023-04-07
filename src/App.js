import { Button,  Box,Container} from "@mui/material";
import { useState } from "react";
import InformationTable from "./components/InformationTable";
import LeftSideDrag from "./components/LeftSideDrag";
import RightSideDrag from "./components/RightSideDrag";


function App() {
  const[inputs,setInputs]=useState([]);
  const [changeValue,setChangeValue]=useState("")
  const [tableInfo,setTableInfo]=useState([])
   const [isInputOpen,setIsInputOpen]=useState(false)
  console.log(inputs)
  function handlerOnDrag(e,information){
    e.dataTransfer.setData("information",information)

    
  }

  function handlerChange(event){
   setChangeValue(event.target.value)
  }

  function onSaveInfo(){
    setTableInfo(inputs);
  }


  function handleOnDrop(e){
    if(changeValue.length>0){
    const information=e.dataTransfer.getData("information");
    setInputs([...inputs,information])
    setChangeValue("")
    setIsInputOpen(false)
    }
   
    
    
  }

  function handleDragOver(e){

    e.preventDefault();
    
  }
  return (
    <Container fixed >
      <Box
      maxHeight="400px"
      overflow="auto"
         sx={{
              display: 'grid',
              gap: 1,
              gridTemplateColumns: 'repeat(2, 1fr)',
              padding:"40px"
            }}>
          
        <LeftSideDrag handlerOnDrag={handlerOnDrag}
          handlerChange={handlerChange}
          changeValue={changeValue}
          setIsInputOpen={setIsInputOpen}
          isInputOpen={isInputOpen}/>
        
        <RightSideDrag handleOnDrop={handleOnDrop}
         handleDragOver={handleDragOver}
         inputs={inputs} />
        
      </Box>

      <Box sx={{display:"flex",justifyContent:"flex-end"}} margin="30px 100px">
            <Button variant="contained" onClick={onSaveInfo}>Save</Button>
      </Box>


      <Box sx={{ display: 'flex' }}>
       <InformationTable tableInfo={tableInfo} />
             </Box>
    </Container>
  );
}

export default App;
