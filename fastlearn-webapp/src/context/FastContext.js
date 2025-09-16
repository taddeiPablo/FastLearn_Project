import { createContext } from 'react';
export const FastContext = createContext();

export const FastContextProvider = ({children}) => {
    
    
    
    
    
    
    return <FastContext.Provider>
        {children}
    </FastContext.Provider>
}