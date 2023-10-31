import React from 'react';
import {User} from "../User/User";

import css from './Users.module.css'

const Users = ({data}) => {
    console.log(data)
    return (
        <div className={css.Users}>
            {data.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};