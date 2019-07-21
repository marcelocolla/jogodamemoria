import React from 'react'
import { useSelector } from 'react-redux'

import { Box, BtnBack, Text, Ico } from './styles'

import NavigatorService from '~/services/navigation'

const headerApp = props => {
    const { name } = useSelector(state => state.auth),
        title = props.title || name,
        goBack = () => {
            NavigatorService.goBack()
        }

    return (
        <Box>
            <BtnBack onPress={goBack}>
                <Ico name="chevron-left" />
            </BtnBack>

            <Text>{title}</Text>
        </Box>
    )
}

headerApp.defaultProps = {
    title: null,
}

export default headerApp
