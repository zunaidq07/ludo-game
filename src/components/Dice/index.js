import React, { useState, useEffect, useContext } from 'react'
import LudoContext from '../../ludoContext/ludoContext'
import './Style.scss'

const Dice = ({ handleEachTurn }) => {
    const randomNumber = () => {
        return Math.ceil(Math.random()*6)
    }
    const { setDiceValue, diceValue, setCounter } = useContext(LudoContext)
    const handleClick = () => {
        setCounter()
        const nextValue = randomNumber()
        setDiceValue(nextValue)
        handleEachTurn(nextValue)
    }
    return (
        <div>
            <button className="dice-btn" onClick={handleClick}>{diceValue}</button>
            <h3>Roll Dice</h3>
        </div>
    )
}

export default Dice
