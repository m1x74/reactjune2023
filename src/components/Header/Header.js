import React from 'react';

import css from './header.module.css'
import {useChapter} from "../../hooks/useChapter";

const Header = () => {
    const{chapter}=useChapter()
    return (
        <div className={css.Header}>
            {chapter?<h2>{chapter}</h2> :<h2>Rick & Morty</h2> }

        </div>
    );
};

export {Header};