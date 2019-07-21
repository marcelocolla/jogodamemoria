import { call, put, delay } from 'redux-saga/effects'

import NavigatorService from '~/services/navigation'

import { Creators as AuthActions } from '../ducks/auth'

const onSaveUser = function*(action) {
    yield put(AuthActions.saveUser(action.data))

    NavigatorService.navigate('Game')
}

export { onSaveUser }
