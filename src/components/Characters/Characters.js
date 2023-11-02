

import {Character} from "../Character/Character";
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {characterService} from "../../services/character.service";
import {useChapter} from "../../hooks/useChapter";


const Characters = () => {
    const {ids}=useParams();
    const [characters,setCharacters]=useState([]);
    useEffect(()=>{
        characterService.getById(ids).then(({data})=>setCharacters(data))
    },[ids])

    console.log(characters)
    const navigate=useNavigate();
    const {setChapter}=useChapter();
    const back =()=>{
        setChapter(null);
        navigate(-1)
    }

    return (
        <div>
            <button onClick={back}>BACK</button>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};