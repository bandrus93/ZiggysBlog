import { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

export const useAppState = () => {
    const context = useContext(AppStateContext);
    if (!context) {
        throw new Error("useAppState must be wrapped with a provider.");
    }
    return context;
}

export const AppStateProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null
    });

    const updateUser = (newUser) => {
        setState((prevState) => ({
            ...prevState,
            user: newUser
        }));
    }

    return (
        <AppStateContext.Provider value={{state, updateUser}}>{children}</AppStateContext.Provider>
    );
}