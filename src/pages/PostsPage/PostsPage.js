import React from 'react';
import {useLoaderData} from "react-router-dom";
import {Posts} from "../../components/Posts/Posts";

const PostsPage = () => {
    const posts=useLoaderData()

    return (
        <div>
            <Posts posts={posts.data}/>
        </div>
    );
};

export {PostsPage};