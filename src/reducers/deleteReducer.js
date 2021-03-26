export default function deleteReducer(state=false, action) {
    switch(action.type) {
        case 'SET_DELETE':
            return !state
        default:
            return state
    }
}