import React from 'react';
import axios from "axios";

const axiosService = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'})

export {axiosService};