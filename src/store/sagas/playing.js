import { select, call, put, delay } from 'redux-saga/effects'

import { Creators as CardActions } from '../ducks/card'
import { Creators as PlayingActions } from '../ducks/playing'
import { Creators as RankingActions } from '../ducks/ranking'

import { PAIR_MAX } from '~/constants'
import { createNewGame } from '~/services/playingCards'

const configureNewGame = function*(action) {
    const data = yield call(createNewGame)

    yield put(PlayingActions.createNewGame())
    yield put(CardActions.createNewGame(data))
}

const onVerifyFinishGame = function*(action) {
    const { playing, auth } = yield select(),
        { countRound, countPair } = playing,
        isFinish = countPair === PAIR_MAX

    if (isFinish) {
        const data = {
            name: auth.name,
            countRound,
        }

        yield put(RankingActions.onSaveRanking(data))

        yield delay(1250)
        yield put(PlayingActions.completeGame())
    }
}

export { configureNewGame, onVerifyFinishGame }
