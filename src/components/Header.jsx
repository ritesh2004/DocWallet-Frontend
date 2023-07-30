import { AppBar, Container, ThemeProvider, Toolbar, Typography, colors, createTheme } from '@mui/material'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Authcontext from '../context/Authcontext'
import {Button} from '@mui/material'


function Header() {
    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            primary:{
                main: '#1b05ffde'
            }
        }
    })
    let {user,LogoutUser} = useContext(Authcontext);
    const navigate = useNavigate();
  return (
    <div className='header'>
    <ThemeProvider theme={lightTheme}>
        <AppBar position='static' color='transparent'>
                <Container>
            <Toolbar>
            <Container sx={{flexGrow:1,display:'flex'}}>
            <div onClick={()=>navigate('/')}>

                    <Typography variant='h4' sx={{color:'blue',fontFamily:'Montserrat',fontWeight:'bold',textShadow:'-3px 4px 9px rgb(0 0 0 / 50%)',cursor:'pointer'}}>
                        DocWallet
                    </Typography>
            </div>
                    {/* <img src='https://www.digilocker.gov.in/assets/img/digilocker_logo.png' height={43} width={209}/>
                    <img style={{marginLeft:'20px'}} src='https://www.digilocker.gov.in/assets/img/dlg20_logo.png' height={39} width={74}/> */}
            </Container>
        
            {!user?<><div style={{width:'25%',display:'flex',gap:'20px',color:'blue',textTransform:'uppercase'}}>
            <div onClick={()=>{navigate('/signin')}}>
                <Typography style={{borderRight:'solid 2px grey',paddingRight:'20px',cursor:'pointer'}}>Sign in</Typography>
            </div>
                <div onClick={()=>{navigate('/signup')}}>
                <Typography style={{backgroundColor:'blue',color:'white',padding:'0 10px 0 10px',borderRadius:'15px',cursor:'pointer'}}>Sign up</Typography>
                </div>
            </div></>:<span style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px',width:'25%'}}><Typography sx={{fontFamily:'Montserrat',fontWeight:'bold'}}>{user}</Typography> <Button variant='contained' onClick={()=>LogoutUser()}>Log Out</Button> </span>}                       
                    
            </Toolbar>
                </Container>
        </AppBar>
    </ThemeProvider>
    </div>
  )
}

export default Header