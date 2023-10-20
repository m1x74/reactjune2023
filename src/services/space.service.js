import React from 'react';

import {axiosServiceShip} from "./axios.service";

const spaceService = {
    getAll: axiosServiceShip.get('/launches')
}
export {spaceService}