import React, { useContext } from "react";
import Authcontext from "../context/Authcontext";
import { Outlet } from "react-router-dom";
import Signin from "../pages/Signin";

const Privateroute = ({children}) =>{
    let {user} = useContext(Authcontext);

    return(
        user?<Outlet/>:<Signin/>
    )
}

export default Privateroute;