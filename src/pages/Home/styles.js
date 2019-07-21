import styled from 'styled-components/native'

import { base, layout, theme } from '~/ui'

import { Router } from '~/components/basic'

export const Box = styled(Router)`
    justify-content: center;
    align-items: stretch;
    padding: ${layout.gutter}px;
    background-color: ${theme.primary.base};
`

export const Title = styled.Text`
    ${base.bold}

    font-size: 42;
    text-align: center;
    color: ${theme.white.base};
    margin-bottom: ${layout.gutterLarge * 2};
`

export const Label = styled.Text`
    color: ${theme.primary.light};
    text-align: center;
`

export const TextInput = styled.TextInput`
    ${base.bordersolid}
    ${base.bold}

    border-bottom-color: rgba(255,255,255, 0.5);
    border-bottom-width: 1;
    margin-vertical: ${layout.gutterLarge};
    padding: ${layout.gutter}px;
    min-width: 240;
    text-align: center;
    font-size: 18;
    color: ${theme.white.base};
`
