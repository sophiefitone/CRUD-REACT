import React, { createContext, useReducer } from 'react'
import Appreducer from './Appreducer';

const initialState= {
    users:[]
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider =({children}) => {
    const [state, dispatch] = useReducer(Appreducer, initialState);

    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }
    
    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }
    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }

    return (
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

