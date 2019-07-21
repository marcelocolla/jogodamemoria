import React from 'react'
import { useSelector } from 'react-redux'

import { BtnRanking, Text, Ico, BoxCount, TextCount } from './styles'

import NavigationService from '~/services/navigation'

const ButtonRanking = props => {
    const ranking = useSelector(state => state.ranking),
        qty = ranking.length,
        onRanking = () => {
            NavigationService.navigate('Ranking')
        }

    return (
        <BtnRanking onPress={onRanking}>
            <Text>Ranking</Text>
            <Ico name="trophy" />

            {qty && (
                <BoxCount>
                    <TextCount>{qty}</TextCount>
                </BoxCount>
            )}
        </BtnRanking>
    )
}

export default ButtonRanking
