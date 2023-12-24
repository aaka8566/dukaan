import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import BasicTable from './Table'

const Orders = () => {
  return (
    <Box sx={{padding:"2rem 2rem",display:"grid",rowGap:"1.5rem"}}>
      <Box>
      <Box sx={{display:"grid",alignItems:"center",gap:"1.5rem"}}>
       <Box><Typography sx={{fontSize:"1.25rem",fontWeight:"500",lineHeight:"1.75rem"}}>Transactions | This Month</Typography></Box>
       <Box sx={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
        <Button size='small' sx={{padding:"0.38rem 1rem",borderRadius:"2.5rem",backgroundColor:"#E6E6E6",color:"#808080",fontSize:"0.875rem",fontWeight:"500",lineHeight:"1.25rem"}}>Payout (22)</Button>
        <Button size='small' sx={{padding:"0.38rem 1rem",borderRadius:"2.5rem",backgroundColor:"#146EB4",color:"white"}}>Refunds (6)</Button>
       </Box>
       </Box>
      </Box>

      <Box>
<Box sx={{display:"grid",gridTemplateColumns:"27.5% 11.5%",justifyContent:"space-between",alignItems:"center"}}>
<Box sx={{display:"flex",alignItems:"center",backgroundColor:"#F2F2F2",padding:"0.62rem 1rem",gap:"1rem",border:"1px solid #D9D9D9",borderRadius:"0.375rem"}}>
<img style={{width:"0.875rem",height:"0.875rem"}} src="./search.png" alt="error" />
<TextField
        hiddenLabel
        id="filled-hidden-label-normal"
       placeholder='Order id ,Transaction id'
     size="small"
     disableunderline={true}
     sx={{
        "& .MuiInputLabel-root": {color: 'green'},//styles the label
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { border: "none" },
        },
      }}
      />
</Box>
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem"}}>
        <Button variant='outlined' size='small' sx={{padding:"0.38rem 0.75rem",border:"1px solid #D9D9D9",color:"#4D4D4D"}}>Sort <img style={{width:"1rem",height:"1rem"}}  src="./Sort.png" alt="error" /></Button>
        <Button variant='outlined'  size='small' sx={{minWidth:"40px",border:"1px solid #D9D9D9",padding:"0.5rem"}}><img style={{width:"1.25rem",height:"1.25rem"}} src="./down.png" alt="error" /></Button>
    </Box>
</Box>
      </Box>

      <Box>
      <BasicTable/>
      </Box>
    </Box>
  )
}

export default Orders