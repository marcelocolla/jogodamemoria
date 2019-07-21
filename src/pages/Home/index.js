import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { useDispatch } from 'react-redux'

import { Types as AuthTypes } from '~/store/ducks/auth'

import { Box, Title, Label, TextInput } from './styles'

import Btn from '~/components/button'

const PageHome = props => {
    const [name, setName] = useState(''),
        dispatch = useDispatch(),
        onPlayGame = () => {
            const data = {
                name,
            }

            dispatch({ type: AuthTypes.SAVE_USER, data })
        }

    return (
        <Box>
            <StatusBar barStyle="light-content" />
            <Title>Memory Game</Title>

            <Label>Para começar a jogar insira seu nome de jogador!</Label>

            <TextInput
                autoCorrect
                autoCompleteType="name"
                placeholder="Seu nome"
                maxLength={20}
                placeholderTextColor="rgba(255,255,255, 0.6)"
                onChangeText={text => setName(text)}
                value={name}
            />

            <Btn medium onPress={onPlayGame} text="Iniciar jogo" />
        </Box>
    )
}

export default PageHome
