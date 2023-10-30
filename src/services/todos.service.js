import React from 'react';
import {axiosService} from "./axios.service";

const todosService ={
    getAll:()=>axiosService.get('/todos')
}

export {todosService};