import React from 'react'
import { useSelector } from 'react-redux'

import { FlatList } from './styles'
import ListItem from '../listItem'

const keyExtractor = (item, index) => `baralho-list-item-${index}`,
    renderItem = ({ item }) => <ListItem data={item} />

const BaralhoList = props => {
    const playingCards = useSelector(state => state.playing),
        { numColumns } = props

    return (
        <FlatList
            numColumns={numColumns}
            data={playingCards}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    )
}

BaralhoList.defaultProps = {
    numColumns: 3,
}

export default BaralhoList
