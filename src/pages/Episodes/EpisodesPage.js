import React from 'react';
import {useLoaderData} from "react-router-dom";
import {Episodes} from "../../components";

const EpisodesPage = () => {

    const {data}=useLoaderData();
    return (
        <div>
            <Episodes data={data}/>
        </div>
    );
};

export {EpisodesPage};