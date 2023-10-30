import React from 'react';
import {axiosService} from "./axios.service";

const postservice ={
    getById:(id)=>axiosService.get(`/posts/${id}`)
}

export {postservice};