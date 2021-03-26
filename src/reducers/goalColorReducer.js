export default function goalColorReducer(state={color: '#e3483d', index: ''}, action) {
    switch(action.type) {
        case 'SET_COLOR':
            return {...state, index: action.index}
        default: 
            return state
    }
}