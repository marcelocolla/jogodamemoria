import React from 'react'
import { useDispatch } from 'react-redux'
import { Types as CardTypes } from '~/store/ducks/card'

import { Box, ImageBack } from './styles'

import CardContent from './cardContent'

const BaralhoListItem = props => {
    const { visible, complete } = props.data,
        dispatch = useDispatch(),
        onPress = () => {
            dispatch(showCartAction(props.data))
        }

    if (!complete && !visible) {
        return (
            <Box onPress={onPress}>
                <ImageBack
                    resizeMode="cover"
                    source={require('../../../images/playing-cards.png')}
                />
            </Box>
        )
    }

    return (
        <Box
            visible={visible}
            complete={complete}
            onPress={onPress}
            activeOpacity={1}>
            <CardContent data={props.data} />
        </Box>
    )
}

const showCartAction = data => ({
    type: CardTypes.SHOW_CARD,
    data,
})

export default BaralhoListItem
