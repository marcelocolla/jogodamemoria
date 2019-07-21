import styled from 'styled-components/native'

import { base, layout, theme } from '~/ui'

import Icon from 'react-native-vector-icons/EvilIcons'

export const Box = styled.View`
    ${base.row}

    padding-bottom: ${layout.gutter / 2};
    padding-top: ${layout.statusBar};
    background-color: ${theme.primary.base};
    align-items: center;
`

export const BtnBack = styled.TouchableOpacity`
    ${base.row}

    align-items: center;
`

export const Text = styled.Text`
    ${base.flex}

    color: ${theme.primary.light};
`

export const Ico = styled(Icon)`
    font-size: 42;
    margin-right: ${layout.gutter / 2};
    color: ${theme.white.base};
`
