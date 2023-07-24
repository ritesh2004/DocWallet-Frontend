import React from 'react';
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import {blue} from '@mui/material/colors'

function Footer() {
    let year = new Date().getFullYear();
  return (
    <div className='footer'>
        <span>Copyright © {year}</span>
        <span>Developer RITESH PRAMANIK</span>
        <span id='icons'>
            <a href='https://www.linkedin.com/in/ritesh-pramanik-8ba316260/'><LinkedInIcon sx={{color:blue[1000]}}/></a>
            <a href='https://github.com/ritesh2004'><GitHubIcon sx={{color:blue[1000]}}/></a>
            <a href='https://www.facebook.com/itzriteshpramanik'><FacebookIcon sx={{color:blue[1000]}}/></a>
            <a href='mailto:ritesh.29@outlook.com'><EmailIcon sx={{color:blue[1000]}}/></a>
        </span>
    </div>
  )
}

export default Footer