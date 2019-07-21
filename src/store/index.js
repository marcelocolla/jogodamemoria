import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'

import reducers from './ducks'
import sagas from './sagas'

const config = {
        key: 'root',
        storage,
        whitelist: ['ranking'],
    },
    persisted = persistReducer(config, reducers),
    sagaMiddleware = createSagaMiddleware(),
    store = createStore(persisted, applyMiddleware(sagaMiddleware)),
    persistor = persistStore(store)

sagaMiddleware.run(sagas)

export { store, persistor }
