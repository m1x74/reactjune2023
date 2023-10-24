import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services/cars.service";

const CarForm = ({setTrigger,updatedCar}) => {
    const {handleSubmit,reset,register,setValue}= useForm()

    const create=async (car)=>{
        const {data}= await carsService.create(car)
        setTrigger(prev=>!prev)
        reset()
    }

    useEffect(()=>{
        if (updatedCar){
            setValue('brand',updatedCar.brand)
            setValue('year',updatedCar.year)
            setValue('price',updatedCar.price)
        }
    },[updatedCar,setValue])

    const update=async (car)=>{
        const {data}=await carsService.update(updatedCar.id,car)
        setTrigger(prev=>!prev)
        reset()
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(updatedCar?update:create)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'year'}{...register('year')}/>
                <input type="text" placeholder={'price'}{...register('price')}/>
                <button>{updatedCar?"SAVE":"CREATE"}</button>
            </form>
        </div>
    );
};

export default CarForm;