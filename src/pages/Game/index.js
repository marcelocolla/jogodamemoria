import React from 'react'

import { Title } from './styles'
import { Router } from '~/components/basic'
import Baralho from '~/components/baralho'
import Toolbar from '~/components/toolbar'

const PageGame = props => {
    return (
        <Router>
            <Toolbar />

            <Baralho />

            <Toolbar />
        </Router>
    )
}

export default PageGame
