import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Types as PlayingTypes } from '~/store/ducks/playing'

import { FlatList } from './styles'
import ListItem from '../listItem'

const keyExtractor = (item, index) => `baralho-list-item-${index}`,
    renderItem = ({ item }) => <ListItem data={item} />

const BaralhoList = props => {
    const dispatch = useDispatch(),
        playingCards = useSelector(state => state.card),
        { numColumns } = props

    useEffect(() => {
        dispatch({
            type: PlayingTypes.LOAD_NEW_GAME,
        })
    }, [])

    return (
        <FlatList
            contentContainerStyle={{ paddingBottom: 24 }}
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
