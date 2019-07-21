import React from 'react'
import { useSelector } from 'react-redux'

import { Box, BtnBack, Text, Ico } from './styles'

const headerApp = props => {
    const { countRound } = useSelector(state => state.playing)

    return (
        <Box>
            <BtnBack>
                <Ico name="chevron-left" />
            </BtnBack>

            <Text>Nome usuário {countRound}</Text>
        </Box>
    )
}

export default headerApp
