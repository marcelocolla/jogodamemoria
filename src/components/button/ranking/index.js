import React from 'react'
import { useSelector } from 'react-redux'

import { BtnRanking, Text, Ico, BoxCount, TextCount } from './styles'

import NavigationService from '~/services/navigation'

const ButtonRanking = props => {
    const ranking = useSelector(state => state.ranking),
        showCount = ranking.length ? true : false,
        onRanking = () => {
            NavigationService.navigate('Ranking')
        }

    return (
        <BtnRanking onPress={onRanking}>
            <Text>Ranking</Text>
            <Ico name="trophy" />

            {showCount && (
                <BoxCount>
                    <TextCount>{ranking.length}</TextCount>
                </BoxCount>
            )}
        </BtnRanking>
    )
}

export default ButtonRanking
