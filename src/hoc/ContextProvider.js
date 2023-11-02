import React, {createContext, useState} from 'react';

const Context=createContext()
const ContextProvider = ({children}) => {
    const state=useState(null);
    return (
        <ContextProvider value={state}>
            {children}
        </ContextProvider>
    );
};

export {ContextProvider,Context};