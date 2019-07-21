import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { useDispatch } from 'react-redux'

import { Types as AuthTypes } from '~/store/ducks/auth'

import { Box, Logo, Label, TextInput } from './styles'

import Btn from '~/components/button'

const PageHome = props => {
    const [name, setName] = useState(''),
        uriLogo = require('../../images/memory-game.png'),
        dispatch = useDispatch(),
        onPlayGame = () => {
            const data = {
                name,
            }

            dispatch({ type: AuthTypes.SAVE_USER, data })
        }

    return (
        <Box>
            <StatusBar barStyle="light-content" backgroundColor="#0C1839" />
            <Logo source={uriLogo} resizeMode="contain" />

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
