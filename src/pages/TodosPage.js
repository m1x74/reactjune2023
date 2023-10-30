import React from 'react';
import {Todos} from "../components/Todos/Todos";

const TodosPage = () => {
    return (
        <div style={{display:"flex",justifyContent:'center'}}>
            <Todos/>
        </div>
    );
};

export {TodosPage};