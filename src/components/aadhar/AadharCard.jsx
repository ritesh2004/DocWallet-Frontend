import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react';
import logo from './Image/logo.png'
import './AadharCard.css'
import Authcontext from '../../context/Authcontext';
import axios from 'axios';

const style = {
    width:'400px',
    height:'250px',
    display:'flex',
    flexDirection:'column',
    backgroundColor:'white',
    padding:'20px',
    borderRadius:'8px'
}

function AadharCard() {
    let {user} = useContext(Authcontext);
    const [data,setData] = useState({});


    useEffect(()=>{
        const getCard = async () =>{
            try{
                let res = await axios.get(`http://127.0.0.1:8000/issued/aadhaar/${user}`)
                console.log(res.data)
                setData(res.data)
            }catch(error){
                console.log(error.message)
            }
        }

        return () => getCard()
    },[])

  return (
    <div className="aadharcard">
        <Box sx={style}>
            <img src={logo} alt="" />
            <div className="det">
                <img src={data.image} alt="" />
                <div className="aadhar-text">
                    <Typography>Name: {data.firstname} {data.lastname}</Typography>
                    <Typography>DOB: {data.dob}</Typography>
                    <Typography>Gender: {data.gender}</Typography>
                    
                </div>
            </div>
            <Typography id="aadharno" variant='h4'>{data.card_no}</Typography>
        </Box>
    </div>
  )
}

export default AadharCard