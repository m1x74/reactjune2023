import React from 'react';
import {axiosServiceCars} from "../../services/axios.service";
import {carsService} from "../../services/cars.service";

const Car = ({car,setDeletedCar}) => {
    const {id,brand,year,price}=car
    const deleteCar=async()=>{
       await carsService.deleteById(id);
        setDeletedCar(id)
    }

    const updateCar=async()=>{
        await carsService.update(id)
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>year:{year}</div>
            <div>price:{price}</div>
            <button>UPDATE</button>
            <button onClick={()=>deleteCar()}>DELETE</button>
            <hr/>

        </div>
    );
};

export {Car};