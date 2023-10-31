import React from 'react';
import {axiosService} from "./axios.service";

const postsService = {
    getById:(id)=>axiosService.get(`/users/${id}/posts`),
    getPostDetails:(id)=>axiosService.get(`/posts/${id}`)
}


export {postsService};