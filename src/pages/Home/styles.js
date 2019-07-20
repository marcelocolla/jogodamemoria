import styled from 'styled-components/native'

import { base, layout, theme } from '~/ui'

export const Box = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Text = styled.Text`
    font-size: 20;
    font-weight: bold;
    color: ${theme.primary};
`
