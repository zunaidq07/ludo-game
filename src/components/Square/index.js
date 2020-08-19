import React from 'react'
import './Style.scss'

const Square = ({ index }) => {
    let squareContent = index === 15 ? 'Win' : (index === 0 ? 'Start' : index)
    return (
            <div className={`square square-${index}`}>
                { squareContent }
                {/* <div className={`circle-${index}`}></div>
                <div className={`circle-${index}`}></div>
                <div className={`circle-${index}`}></div>
                <div className={`circle-${index}`}></div> */}
            </div>
    )
}

export default Square
