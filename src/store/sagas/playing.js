import { select, call, put, delay } from 'redux-saga/effects'

import { Creators as CardActions } from '../ducks/card'
import { Creators as PlayingActions } from '../ducks/playing'

import { PAIR_MAX } from '~/constants'
import { createNewGame } from '~/services/playingCards'

const configureNewGame = function*(action) {
    const data = yield call(createNewGame)

    yield put(PlayingActions.createNewGame())
    yield put(CardActions.createNewGame(data))
}

const onVerifyFinishGame = function*(action) {
    const { playing } = yield select(),
        isFinish = playing.countPair === PAIR_MAX

    if (isFinish) {
        yield delay(750)

        yield put(PlayingActions.completeGame())
    }
}

export { configureNewGame, onVerifyFinishGame }
