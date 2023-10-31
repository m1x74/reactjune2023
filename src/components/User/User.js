import React from 'react';

import css from './User.module.css'
import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const{id,name}=user
    const navigate = useNavigate();
    return (
        <div className={css.User}>
            <div>{id}</div>
            <div>{name}</div>
            <button onClick={()=>navigate(`${id}/user-details`)}>DETAILS</button>


        </div>
    );
};

export {User};