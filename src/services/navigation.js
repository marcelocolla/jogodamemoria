import { NavigationActions } from 'react-navigation'

let navigator

const setNavigator = ref => {
    navigator = ref
}

const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    )
}

const goBack = (key = null) => {
    const backAction = NavigationActions.back({
        key,
    })

    navigator.dispatch(backAction)
}

export default {
    navigate,
    goBack,
    setNavigator,
}
