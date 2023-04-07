import { TableCell, TableRow } from '@mui/material'

import React from 'react'

const ListInformationTable = (props) => {
  return (
    
         <TableRow>
              <TableCell>
                {props.index}
              </TableCell>

              <TableCell >
                {props.tableInfo}
              </TableCell>

              </TableRow>
    
  )
}

export default ListInformationTable