import { combineReducers } from 'redux'

import auth from './auth'
import playing from './playing'
import ranking from './ranking'

export default combineReducers({
    auth,
    playing,
    ranking,
})
