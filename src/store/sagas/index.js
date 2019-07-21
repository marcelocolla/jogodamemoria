import { all, takeEvery } from 'redux-saga/effects'

import { Types as PlayingTypes } from '../ducks/playing'
import { configureNewGame } from './playing'

// Cartas do baralho
import { Types as CardTypes } from '../ducks/card'
import { onShowCard } from './cart'

export default function* rootSaga() {
    yield all([
        takeEvery(CardTypes.SHOW_CARD, onShowCard),
        takeEvery(PlayingTypes.LOAD_NEW_GAME, configureNewGame),
    ])
}
