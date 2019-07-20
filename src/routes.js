import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from '~/pages/Home'

const RouteConfigs = { Home },
    SwitchNavigatorConfig = {
        initialRouteName: 'Home',
        headerMode: 'none',
    },
    Routes = createAppContainer(
        createStackNavigator(RouteConfigs, SwitchNavigatorConfig)
    )

export default Routes
