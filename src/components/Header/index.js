import React, { useContext } from 'react'
import LudoContext from '../../ludoContext/ludoContext'
import './Style.scss'

const Header = () => {
    const { resetGame, startGame } = useContext(LudoContext)
    const handleReset = () => {
        resetGame()
    }
    const handleStart = () => {
        startGame()
    }
    return (
        <div className="header">
            <button onClick={handleReset}>Reset</button>
            <h1>Snake Ladder</h1>
            <button onClick={handleStart}>Start</button>
        </div>
    )
}

export default Header
