import { Box, Typography } from '@mui/material'
import React from 'react'

const Info = () => {
  return (
    <Box sx={{display:"grid",rowGap:"1.5rem",padding:"2rem 2rem"}}>
  
   <Box sx={{display:"flex",justifyContent:"space-between"}}>
    <Box>
        <Typography sx={{fontSize:"1.25rem",fontWeight:"500",lineHeight:"1.75rem"}}>Overview</Typography>
    </Box>
   <Box sx={{display:"flex",alignItems:"center",gap:"0.38rem",backgroundColor:"white",borderRadius:"0.25rem",border:"1px solid #D9D9D9",justifyContent:"flex-end"}}>
            <Typography sx={{fontSize:"1rem",fontWeight:"400",lineHeight:"1.5rem",padding:"0.38rem 0rem 0.38rem 0.88rem"}}>This Month</Typography>
            <img style={{padding:"0.62rem 0.88rem 0.62rem 0rem"}} src="./arrow.png" alt="error" />
        </Box>
   </Box>
    
    <Box sx={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",justifyContent:"space-between",alignItems:"center",columnGap:"1.25rem",border:"0px solid red"}}>
<Box sx={{borderRadius:"0.5rem",backgroundColor:"#146EB4"}}>
    <Box sx={{padding:"1.25rem 1.25rem 0rem 1.25rem",display:"grid",rowGap:"1rem"}}>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"0.5rem"}}>
<Box><Typography sx={{fontSize:"1rem",fontWeight:"400",lineHeight:"1.5rem",color:"white"}}>Next Payout</Typography></Box>
<img style={{widht:"1rem",height:"1rem"}} src="./Help.png" alt="error" />
        </Box>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",alignSelf:"stretch",paddingBottom:"1.25rem"}}>
        <Box><Typography sx={{fontSize:"2rem",fontWeight:"500",lineHeight:"2.375rem",color:"white"}}>₹2,312.23</Typography></Box>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Typography sx={{fontSize:"1rem",fontWeight:"500",lineHeight:"1.5rem",textDecoration:"underline",color:"white"}}>23 Orders</Typography>
           <img src="./Chevw.png" alt="error" />
        </Box>
        </Box>
    </Box>
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 1.5rem",borderRadius:"0.5rem",backgroundColor:"#0E4F82"}}>
    <Box><Typography sx={{fontSize:"0.875rem",fontWeight:"400",lineHeight:"1.25rem",color:"white"}}>Next Payout Date</Typography></Box>
    <Box><Typography sx={{fontSize:"0.875rem",fontWeight:"400",lineHeight:"1.25rem",color:"white"}}>Today , 04:00 P.M.</Typography></Box>
    </Box>
</Box>

<Box sx={{display:"grid",border:"0px solid blue",height:"100%"}}>
<Box sx={{backgroundColor:"#FFF",borderRadius:"0.5rem",padding:"1.25rem 1.25rem 0rem 1.25rem",border:"0px solid green"}}>

<Box sx={{display:"grid",rowGap:"1rem"}}>
<Box sx={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"0.5rem"}}>
<Box><Typography sx={{fontSize:"1rem",fontWeight:"400",lineHeight:"1.5rem"}}>Amount Pending</Typography></Box>
<img style={{widht:"1rem",height:"1rem"}} src="./Helpb.png" alt="error" />
        </Box>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",alignSelf:"stretch"}}>
        <Box><Typography sx={{fontSize:"2rem",fontWeight:"500",lineHeight:"2.375rem"}}>₹2,312.23</Typography></Box>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Typography sx={{fontSize:"1rem",fontWeight:"500",lineHeight:"1.5rem",textDecoration:"underline",color:"#146EB4"}}>23 Orders</Typography>
           <img src="./Chev.png" alt="error" />
        </Box>
        </Box>
</Box>
       
</Box>
<Box flexGrow={'1'}></Box>
</Box>



<Box sx={{display:"grid",border:"0px solid blue",height:"100%"}}>
<Box sx={{backgroundColor:"#FFF",borderRadius:"0.5rem",padding:"1.25rem 1.25rem 0rem 1.25rem",border:"0px solid green"}}>

<Box sx={{display:"grid",rowGap:"1rem"}}>
<Box sx={{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"0.5rem"}}>
<Box><Typography sx={{fontSize:"1rem",fontWeight:"400",lineHeight:"1.5rem"}}>Amount Processed</Typography></Box>
<img style={{widht:"1rem",height:"1rem"}} src="./Helpb.png" alt="error" />
        </Box>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",alignSelf:"stretch"}}>
        <Box><Typography sx={{fontSize:"2rem",fontWeight:"500",lineHeight:"2.375rem"}}>₹23,92,312.19</Typography></Box>
       
        </Box>
</Box>
       
</Box>
<Box flexGrow={'1'}></Box>
</Box>
    </Box>
    </Box>
  )
}

export default Info