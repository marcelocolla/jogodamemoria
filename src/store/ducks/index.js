import { combineReducers } from 'redux'

import auth from './auth'
import card from './card'
import playing from './playing'
import ranking from './ranking'

export default combineReducers({
    auth,
    card,
    playing,
    ranking,
})
