import React, { useReducer } from 'react'
import LudoContext from './ludoContext'
import ludoReducer from './ludoReducer'

const LudoContextProvider = (props) => {
    const initialState = {
        playerCount: 0,
        diceValue: 0,
        counter: 0
    }

    const [state, dispatch] = useReducer(ludoReducer, initialState)

    const setPlayerCount = (count) => {
        dispatch({type: 'PLAYER_COUNT', payload: count})
    }

    const setDiceValue = (value) => {
        dispatch({type: 'DICE_VALUE', payload: value})
    }

    const setCounter = () => {
        dispatch({type: 'SET_COUNTER'})
    }
    return (
        <LudoContext.Provider
            value={{
                playerCount: state.playerCount,
                setPlayerCount,
                diceValue: state.diceValue,
                setDiceValue,
                counter: state.counter,
                setCounter
            }}
        >
            {props.children}
        </LudoContext.Provider>
    )
}

export default LudoContextProvider
