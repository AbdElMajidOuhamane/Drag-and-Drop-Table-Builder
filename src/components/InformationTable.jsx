import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import ListInformationTable from './ListInformationTable'

const InformationTable = (props) => {
  return (
    <Container>
         <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.tableInfo.map((tableInfo,index)=>{
              return(
             <ListInformationTable tableInfo={tableInfo} key={index} index={index} />
              )
            })
            
            }

          </TableBody>
        </Table>
        </TableContainer>


    </Container>
  )
}

export default InformationTable