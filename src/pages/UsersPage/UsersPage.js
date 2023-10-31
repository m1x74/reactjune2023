import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";

import {Users} from "../../components/Users/Users";
import css from './UsersPage.module.css'

const UsersPage = () => {

    const loaderData=useLoaderData()

    return (
        <div className={css.UsersPage}>
            <Outlet/>
            <Users data={loaderData.data}/>
        </div>
    );
};

export {UsersPage};