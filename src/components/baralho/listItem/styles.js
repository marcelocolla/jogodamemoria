import styled from 'styled-components/native'

import { base, layout, theme } from '~/ui'

export const Box = styled.TouchableOpacity`
    ${base.radiusSmall}
    ${base.flex}

    height: 136;
    background-color: ${theme.cards.base};
    margin: ${layout.gutter / 2}px;

    ${props => props.visible && `background-color: ${theme.cards.visible}; `}
    ${props => props.complete && `background-color: ${theme.cards.complete}; `}
`

export const ImageBack = styled.Image`
    ${base.radiusSmall}

    width: 100%;
    height: 100%;
`

export const Text = styled.Text`
    ${base.bold}

    font-size: 20;
    padding-vertical: ${layout.gutter - 8};
    padding-horizontal: ${layout.gutter - 4};

    ${props => props.right && `text-align: right; `}

    ${props => props.isRed && `color: ${theme.red.base}; `}
`
