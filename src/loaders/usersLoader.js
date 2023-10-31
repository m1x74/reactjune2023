import React from 'react';
import {usersService} from "../services/users.service";

const usersLoader =async ()=>{
   return await usersService.getAll()

}

export {usersLoader};