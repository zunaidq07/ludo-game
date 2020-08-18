import React, { useState, useEffect } from 'react'
import Board from '../Board'
import Timer from '../Timer'
import Dice from '../Dice';
import PlayersTurn from '../PlayersTurn';
import Header from '../Header';
import SelectPlayerForm from '../SelectPlayerForm'
import './Style.scss'

const GameBoard = () => {
    const [position, setPosition] = useState(0)
    const handleDiceValue = (val) => {
        setPosition(position+val)
    }

    useEffect(() => {
        setTimeout(() => document.querySelector(`.square-${position}`).appendChild(document.createElement('div')).className="yellow circle", 500)
    }, [position])

    return (
        <div>
            <Header />
            <div className="select-player">
                <h3>Select Number of Players</h3>
                <SelectPlayerForm />
            </div>
            <div className="game-board">
                <Board />
                <Timer />
            </div>
            <div className="footer">
                <PlayersTurn />
                <Dice diceValue={handleDiceValue}/>
            </div>
        </div>
    )
}

export default GameBoard
