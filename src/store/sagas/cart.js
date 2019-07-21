import { select, call, put, delay } from 'redux-saga/effects'

import { Creators as CardActions } from '../ducks/card'
import { Creators as PlayingActions } from '../ducks/playing'

let onProcessComplete = true

const onShowCard = function*(action) {
    const { data } = action,
        { isEqCard, newRound, lastCard } = yield call(isEqualsCard, data)

    if (!onProcessComplete) {
        return
    }

    onProcessComplete = false

    if (isEqCard) {
        yield put(PlayingActions.sumPairOfCards())
        yield put(CardActions.updateCart({ data: lastCard, isEqCard }))
    }

    yield put(CardActions.updateCart({ data, isEqCard }))

    if (!newRound) {
        yield put(PlayingActions.saveLastCard(data))
    } else if (isEqCard || newRound) {
        yield put(PlayingActions.startNewRoundCart(data))

        if (newRound) {
            yield delay(750)
            yield put(CardActions.newRoundCart({ action }))
        }
    }

    onProcessComplete = true
}

const compareCard = ({ newCard, lastCard }) => {
    const isEqId = newCard.id === lastCard.id,
        isEqCarta = newCard.carta === lastCard.carta,
        isEqNaipe = newCard.naipe === lastCard.naipe

    return {
        isEqId,
        isEquals: isEqCarta && isEqNaipe,
    }
}

const isEqualsCard = function*(newCard) {
    const { playing } = yield select(),
        { lastCard } = playing,
        { isEqId, isEquals } = compareCard({ newCard, lastCard }),
        newRound = lastCard.id && !isEqId ? true : false,
        isEqCard = isEqId ? false : isEquals

    return { isEqCard, newRound, lastCard }
}

export { onShowCard }
