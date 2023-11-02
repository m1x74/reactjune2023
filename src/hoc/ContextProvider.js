import {createContext, useState} from 'react';

const Context=createContext(null)
const ContextProvider = ({children}) => {
    const state=useState();
    return (
        <ContextProvider value={state}>
            {children}
        </ContextProvider>
    );
};

export {ContextProvider,Context};