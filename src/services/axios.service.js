import React from 'react';
import axios from "axios";

const axiosService = axios.create({baseURL: "https://jsonplaceholder.typicode.com"});
const axiosServiceCars = axios.create({baseURL: "http://owu.linkpc.net/carsAPI/v1"})

export  {axiosService,axiosServiceCars};