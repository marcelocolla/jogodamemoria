import React from 'react'
import { useSelector } from 'react-redux'

import { Box, Text, Round, RoundText, Circle } from './styles'
import BtnRanking from '~/components/button/ranking'

import { PAIR_MAX } from '~/constants'

const Toolbar = props => {
    const { countRound = 0, countPair } = useSelector(state => state.playing),
        isCompleteGame = countPair === PAIR_MAX

    return (
        <Box>
            <Round>
                <Circle complete={isCompleteGame}>
                    <RoundText>{countRound}</RoundText>
                </Circle>

                <Text>Jogadas</Text>
            </Round>

            <BtnRanking />
        </Box>
    )
}

export default Toolbar
