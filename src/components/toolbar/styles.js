import styled from 'styled-components/native'

import { base, layout, theme } from '~/ui'

export const Box = styled.View`
    ${base.bordersolid}

    border-top-width: 1;
    padding: ${layout.gutter}px;
    padding-bottom: ${layout.statusBar};
`

export const Text = styled.Text`
    text-align: center;
`
