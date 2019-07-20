import React from 'react'

import { Btn, Text } from './styles'

const Button = props => {
    const { text } = props,
        onPress = () => {
            props.onPress && props.onPress()
        }

    return (
        <Btn {...props} onPress={onPress}>
            {text ? <Text>{text}</Text> : props.children}
        </Btn>
    )
}

export default Button
