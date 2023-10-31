import React from 'react';
import {commentsService} from "../services/comments.service";

const commentsLoader = async ({params:{id}})=>{
    return await commentsService.getById(id)
}
export {commentsLoader};