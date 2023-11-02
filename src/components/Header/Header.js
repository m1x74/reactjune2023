import React from 'react';

import css from './header.module.css'
import {useChapter} from "../../hooks/useChapter";

const Header = () => {
    const{chapter}=useChapter()
    return (
        <div className={css.Header}>
            {chapter?{chapter} : Rick & Morty}

        </div>
    );
};

export {Header};