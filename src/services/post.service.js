import React from 'react';

import {axiosService} from "./axios.service";

const postService = {
    getAll:()=>axiosService.get('/posts'),
    getById:(id)=>axiosService.get(`/posts/${id}`)
}

export {postService};