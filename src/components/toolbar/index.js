import React from 'react'
import { useSelector } from 'react-redux'

import { Box, BtnRanking, Text, Round, RoundText, Circle, Ico } from './styles'

import { PAIR_MAX } from '~/constants'
import NavigationService from '~/services/navigation'

const Toolbar = props => {
    const { countRound, countPair } = useSelector(state => state.playing),
        isCompleteGame = countPair === PAIR_MAX,
        onRanking = () => {
            NavigationService.navigate('Ranking')
        }

    return (
        <Box>
            <Round>
                <Circle complete={isCompleteGame}>
                    <RoundText>{countRound}</RoundText>
                </Circle>

                <Text>Jogadas</Text>
            </Round>

            <BtnRanking onPress={onRanking}>
                <Text>Ranking</Text>
                <Ico name="trophy" />
            </BtnRanking>
        </Box>
    )
}

export default Toolbar
