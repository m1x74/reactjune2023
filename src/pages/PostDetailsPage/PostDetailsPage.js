import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";

import {PostDetails} from "../../components/PostDetails/PostDetails";
import css from './PostDetails.module.css'

const PostDetailsPage = () => {
    const details=useLoaderData()
    return (
        <div className={css.Details}>
            <PostDetails details={details.data}/>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};