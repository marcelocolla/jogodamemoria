import React from 'react'
import { distanceInWordsStrict, distanceInWordsToNow } from 'date-fns'
import pt from 'date-fns/locale/pt'

import { Box, Row, Ico, IconCircle, Text } from './styles'

const RankingListItem = props => {
    const { name, countRound, date } = props.data,
        nDate = new Date(),
        result = distanceInWordsStrict(date, nDate, { locale: pt })

    return (
        <Box>
            <Row>
                <IconCircle>
                    <Text white>{countRound}</Text>
                </IconCircle>

                <Ico name="trophy" />
            </Row>

            <Text flex>{name}</Text>

            <Text>há {result}</Text>
        </Box>
    )
}

export default RankingListItem
