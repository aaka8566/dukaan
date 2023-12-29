import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('#281206', "Successful", 131634495747, "Today, 08:45 PM", 1125.00),
  createData('#281206', "Successful", 131634495747, "Yesterday, 08:45 PM", 1125.00),
  createData('#281206', "Processing", 131634495747, "12 Jul 2023, 03:00 PM", 1125.00),
  createData('#281206', "Processing", 131634495747, "12 Jul 2023, 03:00 PM", 1125.00),
  createData('#281206', "Successful", 131634495747, "12 Jul 2023, 03:00 PM", 1125.00),
];
const cellstyle={
    width:"20%",fontSize:"0.875rem",fontWeight:"500",lineHeight:"1.25rem",color:"#4D4D4D",fontFamily: "Galano Grotesque,sans-serif"
}
export default function BasicTable() {
  return (
    <TableContainer >
      <Table sx={{ minWidth: 650,border:"none" }} aria-label="simple table">
        <TableHead sx={{width:"100%",border:"0px solid red"}}>
          <TableRow sx={{width:"100%",borderRadius:"0.25rem",backgroundColor:"#F2F2F2"}}>
            <TableCell sx={{width:"20%",fontSize:"0.875rem",fontWeight:"500",lineHeight:"1.25rem",color:"#4D4D4D",fontFamily: "Galano Grotesque,sans-serif"}} align="left">Order ID</TableCell>
            <TableCell sx={{width:"20%",fontSize:"0.875rem",fontWeight:"500",lineHeight:"1.25rem",color:"#4D4D4D",fontFamily: "Galano Grotesque,sans-serif"}} align="left">Status</TableCell>
            <TableCell sx={{width:"20%",fontSize:"0.875rem",fontWeight:"500",lineHeight:"1.25rem",color:"#4D4D4D",fontFamily: "Galano Grotesque,sans-serif"}} align="left">Transaction ID</TableCell>
            <TableCell sx={{width:"20%",fontSize:"0.875rem",fontWeight:"500",lineHeight:"1.25rem",color:"#4D4D4D",fontFamily: "Galano Grotesque,sans-serif"}} align="left">Refund Date</TableCell>
            <TableCell sx={{width:"20%",fontSize:"0.875rem",fontWeight:"500",lineHeight:"1.25rem",color:"#4D4D4D",border:"0px solid red",fontFamily: "Galano Grotesque,sans-serif"}} align="right">Order Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell  scope="row" sx={{fontSize:"0.875rem",fontStyle:"normal",fontWeight:"500",lineHeight:"1.25rem",color:"blue",fontFamily: "Galano Grotesque,sans-serif"}}>
              {row.name}
              </TableCell>
              <TableCell sx={cellstyle} align="left">
               <Box sx={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"0.38rem",fontFamily: "Inter,sans-serif"}}>
               {row.calories=="Successful"?<img src='./greencircle.png' alt='error'/>:<img src='./greycircle.png' alt='error'/>}{row.calories}
               </Box>
               </TableCell>
              <TableCell sx={cellstyle} align="left">{row.fat}</TableCell>
              <TableCell sx={cellstyle} align="left">{row.carbs}</TableCell>
              <TableCell sx={cellstyle} align="right">₹{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}