import { Typography } from '@mui/material'
import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import "./Signin.css";
import { Button } from '@mui/material';
import SigninAni from '../components/Sign.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import Authcontext from '../context/Authcontext';


function Signin() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    // const [err,setErr] = useState(false);

    let {Login,err,success} = useContext(Authcontext);

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
                <form  onSubmit={Login}>
                    <Typography variant='h5'>Username</Typography>
                    <input type="username" name="username" id="username" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder='Username' />
                    <Typography variant='h5'>Password</Typography>
                    <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='Password' />
                    {/* {err?<span style={{color:'red',fontWeight:'300'}}>Invalid Username or Password</span>:<span></span>} */}
                    {success?<span style={{color:'green',fontWeight:'300'}}>{success}</span>:err?<span style={{color:'red',fontWeight:'300'}}>Invalid Username or Password</span>:<span></span>}
                <Button id='sign-btn' type='submit' variant='contained'>Sign In</Button>
                </form>
                <span>Don't have an account? <Link to={'/signup'}>Sign Up</Link></span>
            </div>
        </div>
    )
}

export default Signin