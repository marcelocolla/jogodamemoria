import React from 'react'

import { Box } from './styles'

import CardContent from './cardContent'

const BaralhoListItem = props => {
    const { visible, complete } = props.data,
        onPress = () => {}

    if (!complete && !visible) {
        return <Box onPress={onPress} />
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

export default BaralhoListItem
