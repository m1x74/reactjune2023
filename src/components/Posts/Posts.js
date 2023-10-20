import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import Post from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        postService.getAll().then(({data})=>setPosts(data))
    },[])
    const [postDetails,setPostDetails]=useState(null)

    const onclick=async (id)=>{
     const {data}=  await postService.getById(id)
        setPostDetails(data)
    }


    return (
        <div>
            {postDetails && <PostDetails post={postDetails}/>}
            {posts.map(post=><Post post={post} key={post.id} onClick={onclick}/>)}
        </div>
    );
};

export default Posts;