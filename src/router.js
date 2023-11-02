import React from 'react';
import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {EpisodesPage} from "./pages";
import {CharactersPage} from "./pages";
import {episodesLoader} from "./loaders/episodesLoader";

const router = createBrowserRouter([
    {path:'',element:<MainLayout/>,children:
    [{index:true,element: <Navigate to={'episodes'}/>},
        {path:'episodes',element:<EpisodesPage/>},
        {path:'characters/:ids',element:<CharactersPage/>}
    ]}
])

export {router};