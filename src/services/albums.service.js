import React from 'react';
import {axiosService} from "./axios.service";

const albumsService ={
    getAll:()=>axiosService.get('/albums')
}

export {albumsService};