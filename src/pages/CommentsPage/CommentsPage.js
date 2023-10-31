import React from 'react';
import {useLoaderData} from "react-router-dom";
import {Comments} from "../../components/Comments/Comments";

const CommentsPage = () => {
    const comments=useLoaderData()
    return (
        <div>
            <Comments comments={comments.data}/>
        </div>
    );
};

export {CommentsPage};