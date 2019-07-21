import styled from 'styled-components/native'

import { base, layout, theme } from '~/ui'

import { Router } from '~/components/basic'

export const Box = styled(Router)`
    justify-content: flex-start;
    align-items: stretch;
    padding: ${layout.gutter}px;
    background-color: ${theme.primary.base};
`

export const Logo = styled.Image`
    margin-top: ${layout.statusBar + 16};
    margin-bottom: ${layout.gutterLarge + 16};
    margin-left: 10%;
    width: 80%;
    height: 120px;
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
