import React, { createContext, useReducer } from "react";

export const myAppContext = createContext({
    userInfo: null,
    dispatchUserInfo: (action) => {}
})

export const MyAppContextProvider = ({children}) => {

    const userInfoReducer = (state, action) => {
        switch (action.type) {
            case 'INITIALISE':
              console.log('INITIALISE')
              return action.payload
            case 'UPDATE_POKEMONS':
              console.log('UPDATE_POKEMONS')
              state.pokemons.splice(action.index, 1)
              return { ...state, pokemons: [...state.pokemons, action.card]}
            case 'UPDATE_POKEMONS_ADD_CARD':
              console.log('UPDATE_POKEMONS_ADD_CARD')
              state.pokemons.splice(state.pokemons.indexOf(null), 1)
              return {...state, pokemons: [...state.pokemons, action.card]}
            default:
              console.log('Aucune action effectuée || action : ' + action.type)
              return state
          }
    }

    const [userInfo, dispatchUserInfo] = useReducer(userInfoReducer, null)

    return (
        <myAppContext.Provider value={{
            userInfo: userInfo,
            dispatchUserInfo: dispatchUserInfo,
        }}>
            {children}
        </myAppContext.Provider>
    )
}