import inputReducer from './inputReducer'
import goalListReducer from './goalListReducer'
import goalColorReducer from './goalColorReducer'
import deleteReducer from './deleteReducer'
import modalReducer from './modalReducer'
import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    inputReducer,
    goalListReducer,
    goalColorReducer,
    deleteReducer,
    modalReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;