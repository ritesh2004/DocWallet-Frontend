import React from 'react';
import './IssueCard.css'
import { Typography } from '@mui/material';

function IssueCard() {
  return (
    <div className="issuedcard">
        <img src="https://lh6.googleusercontent.com/proxy/dzNjRSV7MAvxotouEcqDvbktc9t6PnmV-FBfz84KTydPdeejhSm-7iZQQll9PuNf6kOHhAvwB5_j6Q-ACdHcl0WLzyGlT1A_Emuj_wXIyKKHg8CsfxeOi2FkgwCpN94CcmGnl0pIoJ33Yp_EegwH1uQMNOuuTPn6tb76utFlhe4gUc8fmrlFIsSp7b7T=s0-d" alt="" />
        <span id='view'>Click to View</span>
    </div>
  )
}

export default IssueCard