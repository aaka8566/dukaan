import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const datarr=[
    {"img":"./home.png","name":"Home"},
    {"img":"./orders.png","name":"Orders"},
    {"img":"./products.png","name":"Products"},
    {"img":"./delivery.png","name":"Delivery"},{"img":"./marketing.png","name":"Marketing"},{"img":"./analytics.png","name":"Analytics"},{"img":"./payouts.png","name":"Payouts"},{"img":"./discounts.png","name":"Discounts"},{"img":"./audience.png","name":"Audience"},{"img":"./appearance.png","name":"Appeareance"},{"img":"./plugins.png","name":"Plugins"},
]



const Sidebar = () => {
  return (
    <Box sx={{backgroundColor:"#1E2640",display:"grid",gridTemplateRows:"90% 7%",rowGap:"1rem",padding:"1rem 0.625rem",height:"100%"}}>
        <Box sx={{display:"grid",rowGap:"1.5rem",maxHeight:"0%"}}>
       
        <Box sx={{border:"0px solid green",display:"grid",gridTemplateColumns:"25% 50% 15%",alignItems:"center",columnGap:"0.78rem"}}>
<Box><img style={{width:"2.475rem" ,height:"2.475rem"}} src="./Image.png" alt="error" /></Box>
<Box>
<Typography sx={{fontSize:"0.9375rem",fontWeight:"500",lineHeight:"1.375rem",color:"white",fontFamily:"Inter"}}>Nishyan</Typography>
        <Typography sx={{fontSize:"0.81rem",fontWeight:"400",lineHeight:"1rem",textDecoration:"underline",color:"white",fontFamily: "Galano Grotesque"}}>Visit Store</Typography>
</Box>
<Box >
    <img src="./cd.png" alt="error" />
</Box>
        </Box>


<Box sx={{display:"grid"}}>
{datarr.map((el,index)=>(
    <Box key={index} sx={{backgroundColor:`${el.name=="Payouts"?"#353C53":null}`,borderRadius:"0.25rem",padding:"0.5rem 1rem",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"0.75rem"}}>
    <img style={{width:"1.25rem",height:"1.25rem"}} src={el.img} alt="error" />
    <Button sx={{fontSize:"0.875rem",fontWeight:"500",lineHeight:"1.25rem",color:"white",fontFamily: "Inter"}}>{el.name}</Button>
    </Box>
))}

</Box>

        </Box>
        <Box sx={{backgroundColor:"#353C53",borderRadius:"0.25rem",display:"flex",alignItems:"center",padding:"0.38rem 0.75rem",gap:"0.75rem"}}>
       <Box><img src="./wallet.png" alt="error" /></Box>
       <Box>
        <Typography sx={{fontSize:"0.81rem",fontWeight:"400",lineHeight:"1rem",color:"white",fontFamily: "Inter"}}>Available Credits</Typography>
        <Typography sx={{fontSize:"1rem",fontWeight:"500",lineHeight:"1.5rem",color:"white",fontFamily: "Inter"}}>222.10</Typography>
       </Box>
        </Box>
    </Box>
  )
}

export default Sidebar