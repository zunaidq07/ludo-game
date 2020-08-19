import React, { useReducer } from 'react'
import LudoContext from './ludoContext'
import ludoReducer from './ludoReducer'

const LudoContextProvider = (props) => {
    const initialState = {
        playerCount: 0,
        diceValue: 0,
        counter: 0,
        nextPlayer: 0,
        gameStatus: false
    }

    const [state, dispatch] = useReducer(ludoReducer, initialState)

    const setPlayerCount = (count) => {
        dispatch({type: 'PLAYER_COUNT', payload: count})
    }

    const resetGame = () => {
        dispatch({type: 'RESET_GAME'})
    }

    const startGame = () => {
        dispatch({type: 'START_GAME'})
    }

    const setDiceValue = (value) => {
        dispatch({type: 'DICE_VALUE', payload: value})
    }

    const setCounter = () => {
        dispatch({type: 'SET_COUNTER'})
    }
    const nextTurn = () => {
        dispatch({type: 'NEXT_TURN'})
    }

    return (
        <LudoContext.Provider
            value={{
                playerCount: state.playerCount,
                setPlayerCount,
                diceValue: state.diceValue,
                setDiceValue,
                counter: state.counter,
                setCounter,
                nextTurn,
                nextPlayer: state.nextPlayer,
                gameStatus: state.gameStatus,
                resetGame,
                startGame
            }}
        >
            {props.children}
        </LudoContext.Provider>
    )
}

export default LudoContextProvider
