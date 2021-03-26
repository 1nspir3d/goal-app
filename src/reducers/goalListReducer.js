export default function goalListReducer(state=[], action) {
    switch(action.type) {
        case 'ADD_GOAL':
            return [...state, action.text]
        case 'REMOVE_GOAL':
            return(
                state.filter((item, index) => index != action.item)
            )
        default:
            return state
    }
}