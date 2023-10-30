import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {postservice} from "../../services/postservice";
import {Post} from "../Post/Post";

const PostContainer = () => {
    const {state:{postId}}= useLocation();
    console.log(postId)

    const [post,setPost]=useState([]);
    useEffect(()=>{
        postservice.getById(postId).then(({data})=>setPost(data))
    },[postId])
    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {PostContainer};