import React from 'react';
import {axiosService} from "./axios.service";

const commentsService ={
    getAll:()=>axiosService.get('/comments')
}

export {commentsService};