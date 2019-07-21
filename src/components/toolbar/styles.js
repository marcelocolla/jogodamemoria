import styled from 'styled-components/native'

import { base, layout, theme } from '~/ui'

import Icon from 'react-native-vector-icons/EvilIcons'

export const Box = styled.View`
    ${base.row}
    ${base.bordersolid}

    border-top-width: 1;
    padding-horizontal: ${layout.gutter};
    padding-top: ${layout.gutter / 2};
    padding-bottom: ${layout.statusBar};
    align-items: center;
    justify-content: space-between;
`

export const BtnRanking = styled.TouchableOpacity`
    ${base.row}

    align-items: center;
`

export const Text = styled.Text``

export const Round = styled.View`
    ${base.row}

    align-items: center;
`

export const Circle = styled.View`
    ${base.center}

    width: 32;
    height: 32;
    border-radius: 32;
    margin-right: ${layout.gutter};
    background-color: ${theme.white.light};

    ${props =>
        props.complete &&
        `
        background-color: ${theme.cards.complete};
    `}
`

export const RoundText = styled.Text`
    ${base.bold}
`

export const Ico = styled(Icon)`
    font-size: 42;
    margin-left: ${layout.gutter};
`
