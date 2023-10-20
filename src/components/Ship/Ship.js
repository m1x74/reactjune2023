import React from 'react';

const Ship = ({ship}) => {
    const {mission_name,launch_year,links:{mission_patch_small}} = ship
    return (
        <div>
            <div>{mission_name}</div>
            <div>{launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>

        </div>
    );
};

export default Ship;