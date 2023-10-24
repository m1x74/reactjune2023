import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../services/comment.service";

const CommentsForm = ({setComments}) => {
  const{handleSubmit,reset,register}=  useForm()
    const save=async (comment)=>{
      const {data}= await commentService.create(comment);
      setComments(prev=>[...prev,data])
      reset()

    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'postID'}{...register('postID')}/>
                <input type="text" placeholder={'id'}{...register('id')}/>
                <input type="text" placeholder={'name'}{...register('name')}/>
                <input type="text" placeholder={'email'}{...register('email')}/>
                <input type="text" placeholder={'body'}{...register('body')}/>
                <button>CREATE</button>



            </form>
            
        </div>
    );
};

export default CommentsForm;