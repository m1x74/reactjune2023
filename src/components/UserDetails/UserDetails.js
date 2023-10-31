import React from 'react';
import {useNavigate} from "react-router-dom";

const UserDetails = ({details}) => {
    const {id,name,username,email, phone} = details
    const navigate=useNavigate()
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <div>phone:{phone}</div>
            <button onClick={()=>navigate(`posts`)}>POST OF CURRENT USER</button>
            <button onClick={()=>navigate(`/users`)}>HIDE DETAILS</button>


        </div>
    );
};

export {UserDetails};