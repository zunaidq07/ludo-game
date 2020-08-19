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
    const [prevPosition, setPrevPosition] = useState(0)
    const { diceValue } = useContext(LudoContext)
    useEffect(() => {
        console.log('position and prevposition', position, prevPosition)
        if(position !== 0 && prevPosition <= 15) {
            const el = document.querySelector(`.yellow`)
            if(el) {
                document.querySelector(`.square-${prevPosition}`).removeChild(el)
            }   
        }
        if(document.querySelector(`.square-${position}`)) {
            document.querySelector(`.square-${position}`).appendChild(document.createElement('div')).className="yellow circle"
        }
    }, [position])

    const handleEachTurn = (nextValue) => {
        if(nextValue+position <= 15) {
            setPosition(nextValue+position)
        }
        if(diceValue + prevPosition<=15) {
            setPrevPosition(diceValue + prevPosition)
        }
    }

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
                <Dice handleEachTurn={handleEachTurn}/>
            </div>
        </div>
    )
}

export default GameBoard
