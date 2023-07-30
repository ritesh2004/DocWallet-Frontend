import React, { useContext, useEffect, useState } from 'react';
import './Issued.css';
import { Typography } from '@mui/material';
import IssueCard from './IssueCard';
import Authcontext from '../context/Authcontext';
import axios from 'axios';

function Issued() {

  let {user} = useContext(Authcontext);

  // const [category,setCategory] = useState("");
  const [data,setData] = useState([]);

  useEffect(()=>{
    const getCards = async () =>{
      try{
        let res = await axios.get(`http://127.0.0.1:8000/issue/`)
        console.log(res.data)
        setData(res.data)
      }catch(error){
        console.log(error.message)
      }
    }

    return () => getCards()
  })

  return (
    <div className="issued">
        <div className="issue-text">
            <Typography variant='h5' style={{fontFamily:'Montserrat',color:'green',fontWeight:'bolder'}}>Issued Documents</Typography>
        </div>
        <div className="issue-content">
            {
              data?.map((data,id)=>{
                return (
                  data.username === user ? 
                  <IssueCard category={data.category} imgURL={data.category==="aadhaar"?"https://wowjohn.com/wp-content/uploads/2021/07/aadhar-card-png.png":"https://realtyquarter.com/wp-content/uploads/2019/05/PAN-CARD.jpg"}/> : <span></span>
                )
              })
            }
        </div>
    </div>
  )
}

export default Issued