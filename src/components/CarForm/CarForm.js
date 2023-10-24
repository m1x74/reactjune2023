import React from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services/cars.service";

const CarForm = ({setTrigger}) => {
    const {handleSubmit,reset,register}= useForm()

    const create=async (car)=>{
        const {data}= await carsService.create(car)
        setTrigger(prev=>!prev)
        reset()
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(create)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'year'}{...register('year')}/>
                <input type="text" placeholder={'price'}{...register('price')}/>
                <button>CREATE</button>
            </form>
        </div>
    );
};

export default CarForm;