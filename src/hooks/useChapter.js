import React, {useContext} from 'react';
import {Context} from "../hoc/ContextProvider";

const useChapter = () => {
  const [chapter,setChapter]=useContext(Context)
return{
    chapter,setChapter
}

};

export {useChapter};