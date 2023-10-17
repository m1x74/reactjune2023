import React from 'react';

const SimpsonMember = ({simpson}) => {
    const {name,age,image} =simpson
    return (
        <div style={{display:"flex",flexDirection:'column', rowGap:'20px', border:'solid black 2px',width:'100px'}}>
            {name} - {age}
            <img style={{width:'60px'}} src={image} alt={name}/>
        </div>
    );
};

export {SimpsonMember} ;