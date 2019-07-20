import React, { Fragment } from 'react'

import { Text } from './styles'

import BaralhoNaipe from '~/components/baralho/naipe'

const BaralhoCardContent = props => {
    const { carta, naipe } = props.data,
        isRed = isRedCard(naipe)

    return (
        <>
            <Text isRed={isRed}>{carta}</Text>

            <BaralhoNaipe naipe={naipe} />

            <Text right isRed={isRed}>
                {carta}
            </Text>
        </>
    )
}

const isRedCard = naipe => naipe === 'COPA' || naipe === 'OURO'

export default BaralhoCardContent
