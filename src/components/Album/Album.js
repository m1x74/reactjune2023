import React from 'react';

import css from './Albun.module.css'

const Album = ({album}) => {
    const{userI,id,title}=album
    return (
        <div className={css.Todo}>
                <div>userI:{userI}</div>
                <div>id:{id}</div>
                <div>title:{title}</div>
        </div>
    );
};

export {Album};