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
        default:
            return state
    }
}

export default ludoReducer