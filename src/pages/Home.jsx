import React, { useContext } from 'react';
import Header from '../components/Header';
import Authcontext from '../context/Authcontext';
import Issued from '../components/Issued';
import { Typography } from '@mui/material';

function Home() {
    let {user} = useContext(Authcontext);
  return (
    <div className='home'>
        <Header/>
        <Typography variant='h4' id="wlc">Welcome <span>admin</span></Typography>
        <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#d7d9f685',padding:'20px'}}>
        <Issued/>
        </div>
    </div>
  )
}

export default Home