import { Typography } from '@mui/material'
import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card">
        <Typography id="card-title" sx={{color:props.color}} variant='h5'>
            {props.name}
        </Typography>
        <span>Get Now</span>
    </div>
  )
}

export default Card