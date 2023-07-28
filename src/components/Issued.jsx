import React from 'react';
import './Issued.css';
import { Typography } from '@mui/material';
import IssueCard from './IssueCard';

function Issued() {
  return (
    <div className="issued">
        <div className="issue-text">
            <Typography variant='h5' style={{fontFamily:'Montserrat',color:'green',fontWeight:'bolder'}}>Issued Documents</Typography>
        </div>
        <div className="issue-content">
            <IssueCard/>
        </div>
    </div>
  )
}

export default Issued