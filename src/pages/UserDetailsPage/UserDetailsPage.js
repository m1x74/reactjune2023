import React from 'react';
import {UserDetails} from "../../components/UserDetails/UserDetails";
import {Outlet, useLoaderData} from "react-router-dom";

const UserDetailsPage = () => {

    const userDetails=useLoaderData()

    return (
        <div>
            <UserDetails details={userDetails.data}/>
            <Outlet/>
            
        </div>
    );
};

export {UserDetailsPage};