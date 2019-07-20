import React from 'react'

import { Box, Title, Label, TextInput } from './styles'

import Btn from '~/components/button'

const PageHome = props => {
    const onPlayGame = () => {
        props.navigation.navigate('Game')
    }

    return (
        <Box>
            <Title>Memory Game</Title>

            <Label>Para começar a jogar insira seu nome de jogador!</Label>

            <TextInput
                autoCorrect
                autoCompleteType="name"
                placeholder="Seu nome"
                maxLength={20}
                placeholderTextColor="rgba(255,255,255, 0.6)"
            />

            <Btn medium onPress={onPlayGame} text="Iniciar jogo" />
        </Box>
    )
}

export default PageHome
