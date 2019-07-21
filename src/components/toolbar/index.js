import React from 'react'
import { useSelector } from 'react-redux'

import { Box, BtnRanking, Text, Round, RoundText, Circle, Ico } from './styles'

import { PAIR_MAX } from '~/constants'

const Toolbar = props => {
    const { countRound, countPair } = useSelector(state => state.playing),
        isCompleteGame = countPair === PAIR_MAX

    return (
        <Box>
            <Round>
                <Circle complete={isCompleteGame}>
                    <RoundText>{countRound}</RoundText>
                </Circle>

                <Text>Jogadas</Text>
            </Round>

            <BtnRanking>
                <Text>Ranking</Text>
                <Ico name="trophy" />
            </BtnRanking>
        </Box>
    )
}

export default Toolbar
