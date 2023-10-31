import React from 'react';
import {postsService} from "../services/posts.service";

const postsLoader = async ({params:{id}})=>{
    return await postsService.getById(id)}

export {postsLoader};