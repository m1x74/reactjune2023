import React from 'react';
import {axiosService} from "./axios.service";

const commentService = {
    getAll:()=>axiosService.get('/comments'),
    create:(comment)=>axiosService.post('/comments',comment)
}


export {commentService};