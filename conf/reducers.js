import { combineReducers } from "redux"

import * as counter from '../components/Counter'

export default combineReducers({
    counter: counter.reducer
})
