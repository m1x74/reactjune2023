import React from 'react';
import {RickMembers} from "../RickMembers/RickMembers";

const RickandMorty = () => {

    const members=[
        {id: 1, name: "Rick Sanchez", status: "Alive", species: "Human", gender: "Male",image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"},
        {id: 2, name: "Morty Smith", status: "Alive", species: "Human", gender: "Male", image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",},
        {id: 3, name: "Summer Smith", status: "Alive", species: "Human", gender: "Female", image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",},
        {id: 4, name: "Beth Smith", status: "Alive", species: "Human", gender: "Female", image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"},
        {id: 5, name: "Jerry Smith", status: "Alive", species: "Human", gender: "Male", image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",},
        {id: 11, name: "Albert Einstein", status: "Dead", species: "Human", gender: "Male", image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",}];
    return (
        <div style={{display:'flex',flexDirection:'column', rowGap:'50px'}}>
            {members.map(member=><RickMembers member={member} key={member.id}/>)}
        </div>
    );
};

export {RickandMorty};