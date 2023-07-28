import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Authcontext = createContext();

export default Authcontext;

export const Authprovider = ({children})=>{

    const [err,setErr] = useState("");
    const [success,setSuccess] = useState("");
    const [user,setUser] = useState("");

    let navigate = useNavigate();

    const Login = async (e)=>{
        e.preventDefault()
        let res = await fetch('http://127.0.0.1:8000/signin/',{
            method:'POST',
            headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({"username":e.target.username.value,"password":e.target.password.value})
    })
    if (res.status === 200) {
        setUser(e.target.username.value)
        setSuccess("Signed In Successfully!")
        navigate('/home')
    }else{
        setErr("Something went wrong!")
    }
}

    const Signup = async (e)=>{
        e.preventDefault()
        if (e.target.password.value === e.target.conPass.value) {
            let res = await fetch('http://127.0.0.1:8000/signup/',{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({'username':e.target.username.value,'password':e.target.password.value,'email':e.target.email.value})
            })
            if (res.status === 200) {
                setSuccess("Registered Successfully!")
                navigate('/signin')
            }else{
                setErr("Something went wrong!")
            }
        }else{
            setErr("Passwords must be same!")
        }
    }


    let context = {
        Login:Login,
        err:err,
        success:success,
        user:user
    }

    return <>
    <Authcontext.Provider value={context}>
        {children}
    </Authcontext.Provider>
    </>
}