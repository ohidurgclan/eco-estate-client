import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allAccess = useFirebase();
    return (
        <AuthContext.Provider value={allAccess}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;