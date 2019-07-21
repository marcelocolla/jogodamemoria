import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './store'
import Routes from '~/routes'
import NavigationService from '~/services/navigation'

const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Routes
                ref={navRef => {
                    NavigationService.setNavigator(navRef)
                }}
            />
        </PersistGate>
    </Provider>
)

export default App
