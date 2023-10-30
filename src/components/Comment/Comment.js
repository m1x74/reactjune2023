import React from 'react';
import css from './Comment.module.css';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId,id,name,email,body}=comment
    const navigate=useNavigate();
    return (
        <div className={css.Comment}>
            <div>postId:{postId}</div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <div>body:{body}</div>
            <button onClick={()=>navigate('post', {state: {postId}})}>POST</button>

        </div>
    );
};

export {Comment};