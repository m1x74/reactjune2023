import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import css from './episode.module.css'
import {episodeService} from "../../services";
import {useChapter} from "../../hooks/useChapter";

const Episode = ({episodex}) => {
    const navigate=useNavigate()
    const {id,name,air_date,episode}=episodex
    const {setChapter}=useChapter();
    const [characters,setCharacters]=useState([]);
    useEffect(()=>{
        episodeService.getById(id).then(({data})=>setCharacters(data.characters))
    },[])

    const toCharacter=()=>{
        const ids=characters.map(character=>character.split('/').slice(-1)[0]).join(',');
        navigate(`/characters/${ids}`)
        setChapter(name)
    }

    return (
        <div className={css.Episode} onClick={toCharacter}>
            <div className={css.Mini}>
                <div>id:{id}</div>
                <div>name:{name}</div>
                <div>air_date:{air_date}</div>
                <div>episode:{episode}</div>
            </div>
        </div>
    );
};

export {Episode};