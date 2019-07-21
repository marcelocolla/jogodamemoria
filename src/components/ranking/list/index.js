import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { FlatList, EmptyState, Text, Ico } from './styles'
import ListItem from '../listItem'

const keyExtractor = (item, index) => `ranking-list-item-${index}`,
    renderItem = ({ item }) => <ListItem data={item} />

const RankingList = props => {
    const records = useSelector(state => state.ranking)

    if (!records.length) {
        return (
            <EmptyState>
                <Ico name="trophy" />

                <Text>Nenhum jogo foi concluído.</Text>
                <Text bold>Seja o primeiro a registrar essa conquistar!</Text>
            </EmptyState>
        )
    }

    return (
        <FlatList
            data={records}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    )
}

export default RankingList
