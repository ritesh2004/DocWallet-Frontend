import React, { useContext, useEffect, useState } from 'react';
import './PanCard.css';
import { Box, Typography } from '@mui/material';
import logo from './Image/logo.png'
import chip from './Image/chip.png'
import qrcode from './Image/qrcode.png'
import Authcontext from '../../context/Authcontext';
import axios from 'axios';

const style = {
    width:'420px',
    height:'280px',
    backgroundColor:'#96bced',
    padding:'10px',
    borderRadius:'8px'
}

const pan_title = {
    fontFamily:'Montserrat',
    // fontWeight:'bold',
    color:'blue'
}

function PanCard() {
    let {user} = useContext(Authcontext);
    const [data,setData] = useState({});


    useEffect(()=>{
        const getCard = async () =>{
            try{
                let res = await axios.get(`http://127.0.0.1:8000/issued/pan/${user}`)
                console.log(res.data)
                setData(res.data)
            }catch(error){
                console.log(error.message)
            }
        }

        return () => getCard()
    },[])


  return (
    <div>

    <div className="pancard">
        <Box sx={style}>
            <img id='logo' src={logo} alt="" />
            <div className="first-sec">
                <img id='qrcode' src={qrcode} alt="" />
                <div className="pan-no">
                    <Typography sx={pan_title}>Parmanent Account Number Card</Typography>
                    <Typography sx={{fontWeight:'bold'}}>{data.card_no}</Typography>
                </div>
                <img id='chip' src={chip} alt="" />
            </div>
            <div className="det">
            <div className="details">
            <Typography>NAME: {data.firstname} {data.lastname}</Typography>
            <Typography>DOB: {data.dob}</Typography>
            <Typography>Gender: {data.gender}</Typography>
            </div>
            <img id='profile' src={data.image} alt="" />
            </div>
        </Box>
    </div>
    </div>
  )
}

export default PanCard