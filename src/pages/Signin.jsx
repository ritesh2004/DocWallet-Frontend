import { Typography } from '@mui/material'
import React from 'react';
import Form from 'react-bootstrap/Form';
import "./Signin.css";
import { Button } from '@mui/material';
import SigninAni from '../components/Sign.json';
import Lottie from 'lottie-react';


function Signin() {
    return (
        <div className="signin-con">
            <div className="sign-ani">
                <Lottie animationData={SigninAni}/>
            </div>
            <div className="signin">
                <Typography id="signin-title" variant='h3'>
                    DocWallet
                </Typography>
                <span>Sign In</span>
                <br />
                <form action="">
                    <Typography variant='h5'>Email Address</Typography>
                    <input type="email" name="email" id="email" placeholder='name@example.com' />
                    <Typography variant='h5'>Password</Typography>
                    <input type="password" name="password" id="password" placeholder='Password' />
                <Button id='sign-btn' variant='contained'>Sign In</Button>
                </form>
            </div>
        </div>
    )
}

export default Signin