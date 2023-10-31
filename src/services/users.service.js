import React from 'react';
import {axiosService} from "./axios.service";

const usersService = {
    getAll:()=>axiosService.get('/users'),
    getById:(id)=>axiosService.get(`/users/${id}`)
}

export {usersService};