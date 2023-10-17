import React from 'react';

const RickMembers = ({member}) => {
    const{id,name,status,species,gender,image}=member
    return (
        <div style={{display:'flex',flexDirection:'column',rowGap:'15px',border:'solid black 2px',width:'100px'}}>
            <div> {id}-{name}</div>
            <div>Status:{status}</div>
            <div>Species:{species}</div>
            <div>Gender:{gender}</div>
            <img style={{width:'80px'}} src={image} alt={name}/>
        </div>
    );
};

export  {RickMembers};