import React from 'react';
import {axiosServiceCars} from "./axios.service";

const carsService = {
    getAll:()=>axiosServiceCars.get('/cars'),
    create:(car)=>axiosServiceCars.post('/cars',car),
    update:(id,newCar)=>axiosServiceCars.put(`/cars/${id}`,newCar),
    deleteById:(id)=>axiosServiceCars.delete(`/cars/${id}`),

}

export {carsService};