import React, {useEffect, useState} from 'react';
import {characterService} from "../../services/character.service";

const Character = ({character}) => {
    const{id,name,image}=character

    return (
        <div>
            <div>{id}-{name}</div>
            <img src={image} alt="img"/>
        </div>
    );
};

export {Character};