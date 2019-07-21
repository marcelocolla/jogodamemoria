import React from 'react'
import { StatusBar } from 'react-native'

import { Router } from '~/components/basic'
import HeaderApp from '~/components/headerApp'
import RankingList from '~/components/ranking'

const PageRanking = props => {
    return (
        <Router>
            <StatusBar barStyle="light-content" backgroundColor="#0C1839" />
            <HeaderApp title="Ranking dos Jogadores" />

            <RankingList />
        </Router>
    )
}

export default PageRanking
