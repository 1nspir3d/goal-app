export default function modalReducer(state= false, action) {
    switch(action.type) {
        case 'SHOW_MODAL':
            return !state
        default:
            return state
    }
}