import React from 'react'

import { Router } from '~/components/basic'
import HeaderApp from '~/components/headerApp'
import Baralho from '~/components/baralho'
import Toolbar from '~/components/toolbar'
import FisishGame from '~/components/finishGame'

const PageGame = props => {
    return (
        <Router>
            <HeaderApp />
            <FisishGame />
            <Baralho />
            <Toolbar />
        </Router>
    )
}

export default PageGame
