import React, {useEffect, useState} from 'react';

import {spaceService} from "../../services/space.service";
import Ship from "../Ship/Ship";

const Ships = () => {
    const [ships,setShips]=useState([]);
    useEffect(()=>{
    spaceService.getAll.then(({data})=>setShips(data))
    },[])

    return (
        <div>
            {ships.filter(item=>item.launch_year!=='2020').map(ship=><Ship ship={ship}/>)}
        </div>
    );
};

export {Ships};