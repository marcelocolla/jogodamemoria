import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from '~/pages/Home'
import Game from '~/pages/Game'
import Ranking from '~/pages/Ranking'

const RouteConfigs = { Home, Game, Ranking },
    SwitchNavigatorConfig = {
        initialRouteName: 'Home',
        headerMode: 'none',
    },
    Routes = createAppContainer(
        createStackNavigator(RouteConfigs, SwitchNavigatorConfig)
    )

export default Routes
