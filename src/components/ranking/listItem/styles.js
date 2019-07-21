import styled from 'styled-components/native'

import { base, layout, theme } from '~/ui'

import Icon from 'react-native-vector-icons/EvilIcons'

export const Row = styled.View`
    ${base.row}

    align-items: center;
`
export const Box = styled(Row)`
    ${base.bordersolid}

    border-bottom-width: 1;
    padding: ${layout.gutter}px;
`

export const Text = styled.Text`
    ${props =>
        props.white &&
        `
        color: ${theme.white.base};
    `}

    ${props =>
        props.flex &&
        `
        ${base.flex};
    `}
`

export const Ico = styled(Icon)`
    font-size: 36;
    color: ${theme.primary.base};
    margin-right: ${layout.gutter / 2};
`

export const IconCircle = styled.View`
    ${base.center}

    width: 28;
    height: 28;
    border-radius: 28;
    background-color: ${theme.primary.base};
`
