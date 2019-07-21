import { all, takeEvery } from 'redux-saga/effects'

// Save usuário
import { Types as AuthTypes } from '../ducks/auth'
import { onSaveUser } from './auth'

// Iniciar novo game
import { Types as PlayingTypes } from '../ducks/playing'
import { configureNewGame, onVerifyFinishGame } from './playing'

// Cartas do baralho
import { Types as CardTypes } from '../ducks/card'
import { onShowCard } from './cart'

export default function* rootSaga() {
    yield all([
        takeEvery(AuthTypes.SAVE_USER, onSaveUser),
        takeEvery(PlayingTypes.LOAD_NEW_GAME, configureNewGame),
        takeEvery(PlayingTypes.VERIFY_FINISH_GAME, onVerifyFinishGame),
        takeEvery(CardTypes.SHOW_CARD, onShowCard),
    ])
}
