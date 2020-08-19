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
    const [initialize, setInitialize] = useState(false)
    const [red, setRed] = useState(0)
    const [prevRed, setPrevRed] = useState(0)
    const [blue, setBlue] = useState(0)
    const [prevBlue, setPrevBlue] = useState(0)
    const [green, setGreen] = useState(0)
    const [prevGreen, setPrevGreen] = useState(0)
    const [yellow, setYellow] = useState(0)
    const [prevYellow, setPrevYellow] = useState(0)
    const { diceValue, playerCount, counter, nextTurn, nextPlayer, gameStatus } = useContext(LudoContext)
    
    const colors = ['red', 'blue', 'green', 'yellow']

    useEffect(() => {
        if(gameStatus) {
            if(document.querySelector('.square-0')) {
                const initialPosition = document.querySelector('.square-0')
                if(red === 0 && blue === 0 && green === 0 && yellow === 0 && playerCount) {
                    for(let i=0; i<playerCount; i++) {
                        initialPosition.appendChild(document.createElement('div')).className=`${colors[i]} circle`
                    }
                }   
            }
        }
    }, [red, blue, green, yellow, colors, playerCount, counter])

    const handleEachTurn = (nextValue) => {
        setPosition(nextValue)
        // console.log('red: ', red, 'blue: ', blue, 'green: ', green, 'yellow: ', yellow)
        // console.log('prevred: ', prevRed, 'prevblue: ', prevBlue, 'prevgreen: ', prevGreen, 'prevyellow: ', prevYellow)
    }

    const setPosition = (nextValue) => {
        switch(nextPlayer) {
            case 0:
                if(nextValue+red <= 15) {
                    if(diceValue + prevRed<=15) {
                        setPrevRed(red)
                    }
                    setRed(nextValue+red)
                }
                if(red !==0 && prevRed <=15) {
                    const el = document.querySelector('.red')
                    if(el) {
                        document.querySelector(`.square-${prevRed}`).removeChild(el)
                    }
                }
                if(document.querySelector(`.square-${red}`) && counter > 0) {
                    document.querySelector(`.square-${red}`).appendChild(document.createElement('div')).className="red circle"
                }
                break;
            case 1:
                if(nextValue+blue <= 15) {
                    if(diceValue + prevBlue<=15) {
                        setPrevBlue(blue)
                    }
                    setBlue(nextValue+blue)
                }
                if(blue !==0 && prevBlue <=15) {
                    const el = document.querySelector('.blue')
                    if(el) {
                        document.querySelector(`.square-${prevBlue}`).removeChild(el)
                    }
                }
                if(document.querySelector(`.square-${blue}`)) {
                    document.querySelector(`.square-${blue}`).appendChild(document.createElement('div')).className="blue circle"
                }
                break;
            case 2:
                if(nextValue+green <= 15) {
                    if(diceValue + prevGreen<=15) {
                        setPrevGreen(green)
                    }
                    setGreen(nextValue+green)
                }
                if(green !==0 && prevGreen <=15) {
                    const el = document.querySelector('.green')
                    if(el) {
                        document.querySelector(`.square-${prevGreen}`).removeChild(el)
                    }
                }
                if(document.querySelector(`.square-${green}`)) {
                    document.querySelector(`.square-${green}`).appendChild(document.createElement('div')).className="green circle"
                }
                break;
            case 3:
                if(nextValue+yellow <= 15) {
                    if(diceValue + prevYellow<=15) {
                        setPrevYellow(yellow)
                    }
                    setYellow(nextValue+yellow)
                }
                if(yellow !==0 && prevYellow <=15) {
                    const el = document.querySelector('.yellow')
                    if(el) {
                        document.querySelector(`.square-${prevYellow}`).removeChild(el)
                    }
                }
                if(document.querySelector(`.square-${yellow}`)) {
                    document.querySelector(`.square-${yellow}`).appendChild(document.createElement('div')).className="yellow circle"
                }
                break;
            default:
                return null
        }

        nextTurn()
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
