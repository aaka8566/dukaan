import { Box } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Info from './Info'
import Sidebar from './Sidebar'
import Orders from './Orders'

const Home = () => {
  return (
    <Box sx={{display:"flex",width:"100%",backgroundColor:"#FAFAFA",border:"0px solid red"}}>
<Box sx={{width:"16%"}}><Sidebar/></Box>
<Box sx={{width:"84%"}}>
    <Box ><Navbar/></Box>
    <Box ><Info/></Box>
    <Box><Orders/></Box>
</Box>
    </Box>
  )
}

export default Home