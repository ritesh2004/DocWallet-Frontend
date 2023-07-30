import { Typography } from '@mui/material'
import React from 'react'
import './AvailableDoc.css'
import DocCard from './DocCard'

function AvailableDoc() {
  return (
    <div className="availabledoc">
      <Typography variant='h5' sx={{fontFamily:'Montserrat',fontWeight:'bold',borderBottom:'solid 5px blueviolet',paddingBottom:'6px'}}>Available Documents</Typography>
      <div className="docs-card">
          <DocCard title="aadhaar"/>
          <DocCard title="pan"/>
          <DocCard title="voter"/>
          <DocCard title="abc id"/>
      </div>
    </div>
  )
}

export default AvailableDoc