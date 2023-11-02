

import {Character} from "../Character/Character";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {characterService} from "../../services/character.service";


const Characters = () => {
    const {ids}=useParams();
    const [characters,setCharacters]=useState([]);
    useEffect(()=>{
        characterService.getById(ids).then(({data})=>setCharacters(data))
    },[ids])

    console.log(characters)



    return (
        <div>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};