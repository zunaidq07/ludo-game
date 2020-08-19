import React, { useContext } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import LudoContext from '../../ludoContext/ludoContext'
import './Style.scss'

const PlayersTurn = () => {
    const { playerCount, nextPlayer } = useContext(LudoContext)
    const colors = ['red', 'blue', 'green', 'yellow']
    let renderElem = []
    for( let i = 0; i< playerCount; i++) {
        renderElem.push(
            <div className="players-turn">
                <div className={`${colors[i]} circle`}></div>
                <div className={`player-${i}`} style={{display: nextPlayer===i ? 'block' : 'none'}}>
                    <ArrowUpwardIcon />
                </div>
            </div>
        )
    }
    console.log(renderElem)
    return (
        <div className="main-container">
            {
               renderElem.map(elem => (
                    elem
               ))
            }
            {/* <div className="red circle"></div>
            <div className="blue circle"></div>
            <div className="green circle"></div>
            <div className="yellow circle"></div> */}
        </div>
    )
}

export default PlayersTurn
