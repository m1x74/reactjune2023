import React, {useEffect, useState} from 'react';
import {usersService} from "../../services/users.service";
import {User} from "../User/User";
import {UsersForm} from "../UsersForm/UsersForm";

const Users = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        usersService.getAll().then(({data})=>setUsers(data))
    },[])




    return (

        <div>
            <UsersForm setUsers={setUsers}/>
            <hr/>
            {users.map(user=><User user={user} key={user.id} />)}

        </div>
    );
};

export {Users};