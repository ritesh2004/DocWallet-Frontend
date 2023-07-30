import { Typography } from '@mui/material'
import React, { useContext, useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import "./Signin.css";
import {Button} from '@mui/material';
import SigninAni from '../components/SignupAni.json';
import Lottie from 'lottie-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Authcontext from '../context/Authcontext';



function Signup() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    // const [contact,setContact] = useState("");
    const [password,setPassword] = useState("");
    const [conPass,setConPass] = useState("");

    // const [err,setErr] = useState(false);
    let {signupUser,errsignup,isLogged} = useContext(Authcontext);


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
                <form onSubmit={signupUser}>
                    <Typography variant='h5'>Email Address</Typography>
                    <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="name@example.com" />
                    <Typography variant='h5'>Username</Typography>
                    <input type="text" name='username' onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="Username" />
                    {/* <Typography variant='h5'>Registered Mobile</Typography>
                    <input type='number' placeholder='Mobile No'></input> */}
                    <Typography variant='h5'>Password</Typography>
                    <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" />
                    <Typography variant='h5'>Confirm Password</Typography>
                    <input type="password" name='conPass' onChange={(e)=>setConPass(e.target.value)} value={conPass} placeholder="Confirm Password" />
                    {errsignup?<span style={{color:'red',fontWeight:'300'}}>Passwords are not same</span>:<span></span>}
                    {isLogged?<span style={{color:'red',fontWeight:'300',marginTop:'8px'}}>You are already logged in using another account</span>:<span></span>}
                    <Button id='sign-btn' type='submit' variant='contained'>Sign Up</Button>
                </form>
                <span>Already have an account? <Link to={'/signin'}>Sign In</Link></span>
            </div>
        </div>
    )
}

export default Signup