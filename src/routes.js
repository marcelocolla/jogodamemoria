import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from '~/pages/Home'
import Game from '~/pages/Game'

const RouteConfigs = { Home, Game },
    SwitchNavigatorConfig = {
        initialRouteName: 'Home',
        headerMode: 'none',
    },
    Routes = createAppContainer(
        createStackNavigator(RouteConfigs, SwitchNavigatorConfig)
    )

export default Routes
