import React, { useContext } from 'react';
import Header from '../components/Header';
import Authcontext from '../context/Authcontext';
import Issued from '../components/Issued';
import { Typography } from '@mui/material';
import AvailableDoc from '../components/AvailableDoc';
import Footer from '../components/Footer';

function Home() {
    let {user} = useContext(Authcontext);
    console.log(user)
  return (
    <div className='home'>
        <Header/>
        <Typography variant='h4' id="wlc">Welcome <span>{user}</span></Typography>
        <div style={{width:'100%',display:'flex',justifyContent:'center',backgroundColor:'#d7d9f685',padding:'20px',marginBottom:'20px',minHeight:'220px'}}>
        <Issued/>
        </div>
        <AvailableDoc/>
        <Footer/>
    </div>
  )
}

export default Home