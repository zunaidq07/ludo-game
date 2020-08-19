import React, { useState, useEffect, useContext } from 'react'
import LudoContext from '../../ludoContext/ludoContext'
import './Style.scss'

const Dice = () => {
    const randomNumber = () => {
        return Math.ceil(Math.random()*6)
    }
    // const [value, setValue] = useState(randomNumber())
    const { setDiceValue, diceValue } = useContext(LudoContext)
    // console.log('initialVal', value)
    const handleClick = () => {
        // setValue(randomNumber())
        setDiceValue(randomNumber())
    }
    return (
        <div>
            <button className="dice-btn" onClick={handleClick}>{diceValue}</button>
            <h3>Roll Dice</h3>
        </div>
    )
}

export default Dice
