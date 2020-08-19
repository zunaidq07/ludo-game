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
        default:
            return state
    }
}

export default ludoReducer