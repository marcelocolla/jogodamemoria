import React from 'react'

import { Router } from '~/components/basic'
import HeaderApp from '~/components/headerApp'
import Baralho from '~/components/baralho'
import Toolbar from '~/components/toolbar'

const PageGame = props => {
    return (
        <Router>
            <HeaderApp />

            <Baralho />

            <Toolbar />
        </Router>
    )
}

export default PageGame
