import React from 'react'

import { BoxNaipe, ImgNaipe } from './styles'

const BaralhoNaipe = props => {
    const pathImg = getPathImage(props.naipe)

    return (
        <BoxNaipe>
            <ImgNaipe source={pathImg} />
        </BoxNaipe>
    )
}

const getPathImage = naipe => {
    switch (naipe) {
        case 'COPA':
            return require('../../../images/icon-copa.png')
        case 'ESPADA':
            return require('../../../images/icon-espada.png')
        case 'OURO':
            return require('../../../images/icon-ouro.png')
        default:
            return require('../../../images/icon-paus.png')
    }
}

export default BaralhoNaipe
