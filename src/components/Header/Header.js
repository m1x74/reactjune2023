import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.Header}>
            <Link to={''}>HOME</Link>
            <Link to={'users'}>USERS HERE</Link>
        </div>
    );
};

export {Header};