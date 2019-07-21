import styled from 'styled-components/native'

import { base, theme, layout } from '~/ui'

import Icon from 'react-native-vector-icons/EvilIcons'

export const FlatList = styled.FlatList`
    padding-vertical: ${layout.gutter};
`

export const EmptyState = styled.View`
    ${base.flex}
    ${base.center}
`

export const Text = styled.Text`
    ${props =>
        props.bold &&
        `
        ${base.bold}
        margin-top: ${layout.gutter / 2};
    `}
`

export const Ico = styled(Icon)`
    font-size: 120;
    color: ${theme.primary.base};
    margin-bottom: ${layout.gutter};
`
