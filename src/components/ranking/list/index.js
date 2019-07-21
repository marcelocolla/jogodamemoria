import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { FlatList } from './styles'
import ListItem from '../listItem'

const keyExtractor = (item, index) => `ranking-list-item-${index}`,
    renderItem = ({ item }) => <ListItem data={item} />

const RankingList = props => {
    const records = useSelector(state => state.ranking)

    return (
        <FlatList
            data={records}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    )
}

export default RankingList
