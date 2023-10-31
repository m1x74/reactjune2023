import React from 'react';
import {postsService} from "../services/posts.service";

const postDetailsLoader = async ({params:{id}}) => {
    return await postsService.getPostDetails(id)
}


export {postDetailsLoader};