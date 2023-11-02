import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts";
import {EpisodesPage} from "./pages";
import {Characters} from "./pages";
import {episodesLoader} from "./loaders/episodesLoader";

const router = createBrowserRouter([
    {path:'',element:<MainLayout/>,children:
    [
        {path:'episodes',element:<EpisodesPage/>,loader:episodesLoader},
        {path:'characters',element:<Characters/>}
    ]}
])

export {router};