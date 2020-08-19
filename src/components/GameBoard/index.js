import React, { useState, useEffect, useContext } from 'react'
import Board from '../Board'
import Timer from '../Timer'
import Dice from '../Dice';
import PlayersTurn from '../PlayersTurn';
import Header from '../Header';
import SelectPlayerForm from '../SelectPlayerForm'
import LudoContext from '../../ludoContext/ludoContext'
import './Style.scss'

const GameBoard = () => {
    const [position, setPosition] = useState(0)

    const { diceValue } = useContext(LudoContext)

    useEffect(() => {
        setPosition(diceValue+position)
        document.querySelector(`.square-${position}`).appendChild(document.createElement('div')).className="yellow circle"
    }, [position, diceValue])

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
                <Dice />
            </div>
        </div>
    )
}

export default GameBoard
