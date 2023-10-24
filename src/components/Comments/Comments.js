import React, {useEffect, useState} from 'react';

import {commentService} from "../../services/comment.service";
import {Comment} from "../Comment/Comment";
import CommentsForm from "../CommentsForm/CommentsForm";

const Comments = () => {
    const [comments,setComments]=useState([]);
    useEffect(()=>{
        commentService.getAll().then(({data})=>setComments(data))
    },[])

    return (

        <div>
            <CommentsForm setComments={setComments}/>

            {comments.map(comment=><Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export default Comments;