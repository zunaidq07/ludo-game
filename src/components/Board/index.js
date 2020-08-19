import React from 'react'
import Square from '../Square'
import './Style.scss'

const Board = () => {
    let counter = 15
    let firstRow = 0
    return (
        <div className="board">
            {
                [1,2,3,4].map( (row) => {
                        return <div key={row} className="board-row">
                    {
                        [1,2,3,4].map( (col) => {
                            return (
                                <div>
                                    <Square key={col}  index = { row === 4 ? firstRow++ : counter--} />
                                </div>
                            )
                        })
                    }
                    </div>

                })
            }
        </div>
    )
}

export default Board
