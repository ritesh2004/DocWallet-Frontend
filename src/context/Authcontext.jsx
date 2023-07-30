import React, { createContext, useState } from 'react'
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom';
import {useVisitorData} from '@fingerprintjs/fingerprintjs-pro-react';
import axios from 'axios';
// import axios from "axios";

const Authcontext = createContext();

export default Authcontext;


export const Authprovider = ({ children }) => {

    const {isLoading, error, data, getData} = useVisitorData(
        {extendedResult: true},
        {immediate: true}
      )


    const [authToken, setAuthToken] = useState((localStorage.getItem('authenticationToken') ? JSON.parse(localStorage.getItem('authenticationToken')) : null));
    const [user, setUser] = useState((localStorage.getItem('authenticationToken') ? jwt_decode(localStorage.getItem('authenticationToken')) : null));

    const [err,setErr] = useState(false)
    const [errsignup,setErrsignup] = useState(false)
    const [errFin,setErrFin] = useState(false)

    // const [array,setArray] = useState([])
    const [isLogged,setIsLogged] = useState(false)
    const [flag,setFlag] = useState(-1);

    const navigate = useNavigate();

    let LoginUser = async (e) => {
        console.log("Log in fired")
        e.preventDefault()
        getData({ignoreCache: true})
        console.log(data?.visitorId)
        let vId = data?.visitorId
        try{
            let resp = await axios.get(`http://127.0.0.1:8000/details/${e.target.username.value}/`)
            if (resp.data?.fingerprint === vId) {
                
                let res = await fetch("http://127.0.0.1:8000/login/token/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ 'username': e.target.username.value, 'password': e.target.password.value })
                })
                let info = await res.json()
                // console.log(res.status)
                // console.log(info)
                // console.log(jwt_decode(info.access))
                if (res.status === 200) {
                    setAuthToken(info)
                    setUser(jwt_decode(info.access))
                    // console.log(user["username"])
                    navigate('/home');
                    setErr(false)
                    setErrsignup(false)
                    localStorage.setItem('authenticationToken', JSON.stringify(info))
                } else {
                    setErr(true)
                    setErrsignup(false)
                }
            }else{
                setErrFin(true)
            }
            }catch(error){
                setErr(true)
                setErrsignup(false)
            }
        }

    let LogoutUser = () => {
        setAuthToken(null)
        setUser(null)
        console.log("Logged Out")
        localStorage.removeItem('authenticationToken')
    }

    let signupUser = async (e) => {
        console.log("Sign in fired")
        e.preventDefault()
        getData({ignoreCache: true})
        console.log(data?.visitorId)
        let vId = data?.visitorId
            if (e.target.password.value === e.target.conPass.value) {
            let res = await fetch("http://127.0.0.1:8000/login/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 'username': e.target.username.value, 'email': e.target.email.value, 'password': e.target.password.value })
            })
            if (res.status === 200) {
                let resp = await fetch("http://127.0.0.1:8000/details/",{
                    method:'POST',
                    headers:{
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify({'username':e.target.username.value, 'fingerprint':vId})
                })
            }
            setErr(false)  
            navigate('/signin')
        }else{
            setErrsignup(true)
            setErr(false)
        }
    }

// console.log(user)

let Context = {
    user: user?.username,
    LoginUser: LoginUser,
    LogoutUser: LogoutUser,
    signupUser: signupUser,
    err:err,
    errsignup:errsignup,
    errFin:errFin,
    isLogged:isLogged
}

return (
    <Authcontext.Provider value={Context}>
        {children}
    </Authcontext.Provider>
)
}