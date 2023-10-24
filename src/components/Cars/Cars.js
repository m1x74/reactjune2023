import React, {useEffect, useState} from 'react';
import {carsService} from "../../services/cars.service";
import {Car} from "../Car/Car";
import CarForm from "../CarForm/CarForm";
import {axiosServiceCars} from "../../services/axios.service";

const Cars = () => {
    const [cars,setCars]=useState([]);
    const [trigger,setTrigger]=useState(null)
    const [deletedCar,setDeletedCar]=useState(null);
    const [updatedCar,setUpdatedCar]=useState(null);

    useEffect(()=>{
        carsService.getAll().then(({data})=>setCars(data));
    },[trigger,deletedCar,updatedCar]);



    return (
        <div>
            <CarForm setTrigger={setTrigger}/>
            <hr/>
            {
                cars.map((car)=><Car car={car} key={car.id} setDeletedCar={setDeletedCar} setUpdatedCar={setUpdatedCar}/>)
            }
        </div>
    );
};

export {Cars};