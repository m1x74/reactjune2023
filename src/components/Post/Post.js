import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id,title}=post
    return (
        <div>
            {id} <Link to={`/posts/${id}/post-details`}>{title}</Link>

        </div>
    );
};

export {Post};