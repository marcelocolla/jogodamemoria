import styled from 'styled-components/native'

import { base, layout, theme } from '~/ui'

import Icon from 'react-native-vector-icons/EvilIcons'

export const BtnRanking = styled.TouchableOpacity`
    ${base.row}

    align-items: center;
`

export const Text = styled.Text``

export const Ico = styled(Icon)`
    font-size: 42;
`

export const BoxCount = styled.View`
    ${base.center}

    position: absolute;
    top: -4;
    right: -4;
    width: 22;
    height: 22;
    border-radius: 22;
    background-color: ${theme.primary.light};
`

export const TextCount = styled.Text`
    font-size: 12;
    color: ${theme.white.base};
`
