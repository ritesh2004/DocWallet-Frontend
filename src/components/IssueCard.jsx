import React from 'react';
import './IssueCard.css'
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function IssueCard(props) {

  return (
    <Link to={`/${props.category}`}>
    <div className="issuedcard">
        <img src={props.imgURL} alt="" />
        <span id='view'>Click to View</span>
    </div>
    </Link>
  )
}

export default IssueCard