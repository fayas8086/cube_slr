import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import React, {useState} from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system';
import CustomButton from '../CustomButton/CustomButton';
import logoImg from '../../assets/CUBES_logo.png'

import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcons from '@mui/icons-material/Contacts';
import{
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Register from '../../pages/Register/Register';



function Header() {
  const [mobileMenu,setMobileMenu] = useState({left:false})

const navigate = useNavigate()

  const toogleDrawer=(anchor,open)=>(event)=>{
    if(event.type === "keydown" && (event.type === "Tab" || event.type === "Shift")){
      return;
    }
    setMobileMenu({...mobileMenu,[anchor]:open})
   }   

const list =(anchor)=>(
  <Box
  sx={{
    width:anchor == "top" || anchor==="bottom" ? "auto" :250
  }}
  role="presentation"
  onClick={toogleDrawer(anchor,false)}
  onkeyDown = {toogleDrawer(anchor,false)}
  >
       <List>
     {
      nav_title.map((item,index)=>(
        <ListItem key={item.index} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {
              index === 0 && <HomeIcon/>
            }
             {
              index === 1 && <FeaturedPlayListIcon/>
            }
             {
              index === 2 && <MiscellaneousServicesIcon/>
            }
             {
              index === 3 && <ContactsIcons/>
            }
          </ListItemIcon>
          <ListItemText primary={item.display} />
        </ListItemButton>
      </ListItem>
      ))
     }
        
      
      </List>
  </Box>
)

  const nav_title=[{
    path:'/',
    display:'Home'
  },
  {
    path:'/dishes',
    display:'Dishes'
  },
  {
    path:'/services',
    display:'Services'
  },
  {
    path:'/about',
    display:'About Us'
  },
 
]
 
const NavBarLinksBox = styled(Box)(({theme})=>({
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]:{
    display:'none',
  }
}));


const NavBarLink = styled(Typography)(()=>({
fontSize:"14px",
color:'#4F5361',
fontWeight:'bold',
cursor:'pointer',
'&:hover':{
  color:'#fff'
}
}));

const NavBarLogo = styled("img")(({theme})=>({
  cursor:'pointer',
  height:'100px',
  [theme.breakpoints.down("md")]:{
    display:'none',
  }
}));

const CustomMenuIcon = styled("MenuIcon")(({theme})=>({
  cursor:'pointer',
  display:'none',
  marginRight:theme.spacing(2),
  [theme.breakpoints.down("md")]:{
    display:'block',
  }
}));

  return (
   <Box 
   sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'40px',
    maxWidth:'auto',
    backgroundColor:'#FED801',
    marginLeft:'0px',
    marginBottom:'-24px'

   }}> 

    <Box sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:'2rem'
   
    

   }}>
    
    <Box 
    sx={{
    display:'flex',
    alignItems:'center',
    }}>
      
      <CustomMenuIcon onClick={toogleDrawer("left",true)}/>
      <Drawer 
      anchor="left"
      open={mobileMenu["left"]}
      onClose={toogleDrawer("left",false)}
      >
        {list("left")}

      </Drawer>
    <NavBarLogo src={logoImg}/>

    </Box>
        <NavBarLinksBox>
        {nav_title.map((item, index) => (
          
            <NavBarLink variant="body2" onClick={()=>navigate(item.path)}>{item.display}</NavBarLink>
         
        ))}
      </NavBarLinksBox>

    </Box>
    
    <Box
     sx={{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:'1rem'
    

   }}>
    <Link to='/Singup'>
    <NavBarLink variant='body2'>
                   Sign Up
                    </NavBarLink> 
                    </Link>
                   <Link to='Register'>
                    
                    <CustomButton
                    backgroundColor='#0F1B4C'
                    color='#fff'
                    buttonText="Register"
                    /> 
                    </Link>
                    
                    
    </Box>

   </Box>
  )
}

export default Header
