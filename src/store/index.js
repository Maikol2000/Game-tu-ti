import { createStore, combineReducers } from 'redux'
import gameTuTiReducers from './Reducers/GameTuTiReducer'
const rootReducer = combineReducers({
    gameTuTiReducers
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store