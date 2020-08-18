import React, { useState, useEffect } from 'react'
import './Style.scss'

const Dice = ({ diceValue }) => {
    const randomNumber = () => {
        return Math.ceil(Math.random()*6)
    }
    const [value, setValue] = useState(randomNumber())
    console.log('initialVal', value)
    const handleClick = () => {
        setValue(randomNumber())
        setDiceValue()
    }

    const setDiceValue = () => {
        diceValue(value)
    }
    return (
        <div>
            <button className="dice-btn" onClick={handleClick}>{value}</button>
            <h3>Roll Dice</h3>
        </div>
    )
}

export default Dice
