import React from 'react';
import {axiosService} from "./axios.service";

const usersService = {
    getAll:()=>axiosService.get('/users'),
    create:(user)=>axiosService.post('/users',user),
}

export {usersService};