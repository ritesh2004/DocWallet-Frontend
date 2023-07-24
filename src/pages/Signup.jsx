import { Typography } from '@mui/material'
import React from 'react';
import Form from 'react-bootstrap/Form';
// import "./Signin.css";
import {Button} from '@mui/material';
import SigninAni from '../components/SignupAni.json';
import Lottie from 'lottie-react';



function Signup() {
    return (
        <div className="signin-con">
            <div className="sign-ani">
                <Lottie animationData={SigninAni}/>
            </div>
            <div className="signin">
                <Typography id="signin-title" variant='h3'>
                    DocWallet
                </Typography>
                <span>Sign Up</span>
                <br />
                <form action="">
                    <Typography variant='h5'>Email Address</Typography>
                    <input type="email" placeholder="name@example.com" />
                    <Typography variant='h5'>Registered Mobile</Typography>
                    <input type='number' placeholder='Mobile No'></input>
                    <Typography variant='h5'>Password</Typography>
                    <input type="password" placeholder="Password" />
                    <Typography variant='h5'>Confirm Password</Typography>
                    <input type="password" placeholder="Confirm Password" />
                <Button id='sign-btn' variant='contained'>Sign Up</Button>
                </form>
            </div>
        </div>
    )
}

export default Signup