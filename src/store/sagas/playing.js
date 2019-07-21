import { call, put, delay } from 'redux-saga/effects'

import { Creators as CardActions } from '../ducks/card'
import { Creators as PlayingActions } from '../ducks/playing'

import { createNewGame } from '~/services/playingCards'

const configureNewGame = function*(action) {
    const data = yield call(createNewGame)

    yield put(PlayingActions.createNewGame())
    yield put(CardActions.createNewGame(data))
}

export { configureNewGame }
