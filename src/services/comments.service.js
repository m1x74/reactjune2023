import React from 'react';
import {axiosService} from "./axios.service";

const commentsService = {
    getById:(id)=>  axiosService.get(`/posts/${id}/comments`)
}

export {commentsService};