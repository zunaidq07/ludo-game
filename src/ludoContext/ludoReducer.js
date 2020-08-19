const ludoReducer = (state, action) => {
    switch(action.type) {
        case 'PLAYER_COUNT':
            return {
                ...state,
                playerCount: action.payload               
            }
        case 'DICE_VALUE':
            return {
                ...state,
                diceValue: action.payload
            }
        case 'SET_COUNTER':
            return {
                ...state,
                counter: state.counter+1
            }
        case 'NEXT_TURN':
            return {
                ...state,
                nextPlayer: state.counter % state.playerCount
            }
        case 'START_GAME':
            return {
                ...state,
                gameStatus: !state.gameStatus
            }
        case 'RESET_GAME':
            return {
                ...state,
                playerCount: 0,
                diceValue: 0,
                counter: 0,
                nextPlayer: 0,
                gameStatus: false
            }
        default:
            return state
    }
}

export default ludoReducer