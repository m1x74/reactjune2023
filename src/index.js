import React from 'react';
import ReactDOM from 'react-dom/client';

import {router} from "./router";
import {RouterProvider} from "react-router-dom";
import css from './main.css';
import {Context, ContextProvider} from "./hoc/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <ContextProvider>
       <RouterProvider router={router}/>
   </ContextProvider>

);


