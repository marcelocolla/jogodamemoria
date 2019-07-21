import styled from 'styled-components/native'

import { base, layout, theme } from '~/ui'

export const Btn = styled.TouchableOpacity`
    border-radius: 48;
    margin-top: ${layout.gutter};
    padding: ${layout.gutter}px;
    background-color: ${theme.primary.green};

    ${props =>
        props.medium &&
        `
        padding: ${layout.gutter * 1.5}px;
    `}
`

export const Text = styled.Text`
    ${base.bold}

    color: ${theme.dark};
    font-size: 20;
    text-align: center;
`
