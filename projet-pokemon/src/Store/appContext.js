import React, { createContext, useReducer } from "react";

export const myAppContext = createContext({
  userInfo: null,
  dispatchUserInfo: (action) => { },
  userParam: {isFalse: false},
  dispatchUserParam: (action) => { }
})

export const MyAppContextProvider = ({ children }) => {

  const userInfoReducer = (state, action) => {
    switch (action.type) {
      case 'INITIALISE':
        console.log('INITIALISE')
        return action.payload
      case 'UPDATE_POKEMONS':
        console.log('UPDATE_POKEMONS')
        state.pokemons.splice(action.index, 1)
        return { ...state, pokemons: [...state.pokemons, action.card] }
      case 'UPDATE_POKEMONS_ADD_CARD':
        console.log('UPDATE_POKEMONS_ADD_CARD')
        state.pokemons.splice(state.pokemons.indexOf(null), 1)
        return { ...state, pokemons: [...state.pokemons, action.card] }
      default:
        console.log('Aucune action effectuée || action : ' + action.type)
        return state
    }
  }

  const userParamReducer = (state, action) => {
    switch (action.type) {
      case 'SET':
        console.log('SET')
        return { isFalse :state.isFalse, id: action.payload.id, psw: action.payload.psw }
      case 'UNSET':
        console.log('UNSET')
        return {isFalse: action.payload}
      default:
        console.log('Aucune action effectuée || action : ' + action.type)
        return state
    }
  }

  const [userInfo, dispatchUserInfo] = useReducer(userInfoReducer, null)
  const [userParam, dispatchUserParam] = useReducer(userParamReducer, {isFalse: false})

  return (
    <myAppContext.Provider value={{
      userInfo: userInfo,
      dispatchUserInfo: dispatchUserInfo,
      userParam: userParam,
      dispatchUserParam: dispatchUserParam
    }}>
      {children}
    </myAppContext.Provider>
  )
}