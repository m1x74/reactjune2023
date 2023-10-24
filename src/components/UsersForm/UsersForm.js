import React from 'react';
import {useForm} from "react-hook-form";
import {usersService} from "../../services/users.service";

const UsersForm = ({setUsers}) => {

    const {reset,handleSubmit,register}=useForm()
    const save= async (user)=>{
      const {data}=await usersService.create(user)
      setUsers(prev=>[...prev,data])
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={"name"}{...register('name')}/>
                <input type="text" placeholder={"username"} {...register('username')}/>
                <button>POST</button>
            </form>
        </div>
    );
};

export {UsersForm};