// import {Box,HStack,Image,Input,AspectRatio} from "@chakra-ui/react"
import {Link} from "react-router-dom";
export const Navbar = () =>{
    return(
  <div style={{display : "flex",alignItems:"center"}}>
    <img style={{width:"15%", height : "90px",marginLeft : "20px"}} src="https://imgs.search.brave.com/x9ehON_W6XNcH6oSXE4uTMbK0lCfDrDpYtwSEeH_cq4/rs:fit:675:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/Nk9LZ2tfeVZYS045/THNhdUdzMGp3QUFB/QSZwaWQ9QXBp"/>
 
 <input style={{border : "0.8px solid black", width:"55%", height:"40px",marginLeft:"90px",paddingLeft:"25px"}} type="text" placeholder="Search for Products or brands"/>


   <Link  style={{marginLeft:"140px"}} to="/signIn">
   Sign In
   </Link>

   <Link  style={{marginLeft:"35px"}} to="/Bag">
   <img style={{width: "30px", height:"30px"}} src="https://imgs.search.brave.com/FNDX__Rhd9pSdI4OADPvzvfkUDmF767UlZNbJQM7_08/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/WGZqVkxNYWN2dk9R/WnZfUjhDVU1BSGFI/YSZwaWQ9QXBp"/>
   </Link>
 
  </div>


    )
}