import React, { useEffect } from 'react'
import { View, Alert } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { Types as PlayingTypes } from '~/store/ducks/playing'

const AlertFinishGame = props => {
    const dispatch = useDispatch(),
        playing = useSelector(state => state.playing),
        user = useSelector(state => state.auth),
        onNewGame = () => {
            dispatch({ type: PlayingTypes.LOAD_NEW_GAME })
        }

    if (playing.completeGame) {
        const title = 'Parabéns! Você Venceu.',
            saudacao = `Muito bom "${user.name}"`,
            label = 'você completou o desafio com somente'

        Alert.alert(
            title,
            `${saudacao}, ${label} ${playing.countRound} jogadas.`,
            [
                {
                    text: 'Vamos jogar novamente',
                    onPress: onNewGame,
                },
            ],
            { cancelable: false }
        )
    }

    return <View />
}

export default AlertFinishGame
