import React from 'react';
import {axiosService} from "./axios.service";
import {baseURL} from "../constants";

const characterService = {
    getById:(ids)=>axiosService.get(`${baseURL}/character/${ids}`)
}

export {characterService};