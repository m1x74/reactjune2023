import React from 'react';
import {useNavigate} from "react-router-dom";

const PostDetails = ({details}) => {
    const {body,id,title,userId} = details;
    const navigate = useNavigate()
    return (
        <div>
            <div>body:{body}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>userId:{userId}</div>
            <button onClick={()=>navigate('comments')}>COMMENTS</button>

            
        </div>
    );
};

export {PostDetails};