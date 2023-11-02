import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {Header} from "../components";

const MainLayout = () => {
    const navigate=useNavigate()
    return (

        <div>
            <Header/>
            <button onClick={()=>navigate(-1)}>BACK</button>
            <Outlet/>
        </div>
    );
};

export {MainLayout};