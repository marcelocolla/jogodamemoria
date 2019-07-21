import React from 'react'
import { useSelector } from 'react-redux'

import { Box, BtnBack, Text, Ico } from './styles'

import NavigatorService from '~/services/navigation'

const headerApp = props => {
    const { name } = useSelector(state => state.auth),
        goBack = () => {
            NavigatorService.goBack()
        }

    return (
        <Box>
            <BtnBack onPress={goBack}>
                <Ico name="chevron-left" />
            </BtnBack>

            <Text>Nome usuário {countRound}</Text>
        </Box>
    )
}

export default headerApp
