import React from 'react';
import {usersService} from "../services/users.service";

const userDetailsLoader =async ({params:{id}})=>{
     return await usersService.getById(id)
}

export {userDetailsLoader};