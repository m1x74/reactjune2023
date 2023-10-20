import React from 'react';

const Post = ({post,onClick}) => {
   const {id,title}=post
    return (
        <div>
            {id} -- {title}
            <button onClick={()=>onClick(id)}>CHOOSE</button>

        </div>
    );
};

export default Post;