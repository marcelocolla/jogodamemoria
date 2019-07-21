import React from 'react'

import { Provider } from 'react-redux'
import store from './store'

import Routes from '~/routes'
import NavigationService from '~/services/navigation'

const App = () => (
    <Provider store={store}>
        <Routes
            ref={navRef => {
                NavigationService.setNavigator(navRef)
            }}
        />
    </Provider>
)

export default App
