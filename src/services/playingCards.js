import { PAIR_MAX, NAIPE_BARALHO } from '~/constants'

const mathRandom = max => Math.floor(Math.random() * max),
    newCardItem = id => {
        const index = mathRandom(3)

        return {
            id,
            carta: mathRandom(12) + 1,
            naipe: NAIPE_BARALHO[index],
        }
    }

export const createNewGame = () => {
    const records = createNewCards()

    return embaralharCartas(records)
}

export const createNewCards = () => {
    const records = [],
        recordsCopy = []

    for (let index = 1; index <= PAIR_MAX; index++) {
        const item = newCardItem(index)

        records.push(item)
        recordsCopy.push({
            ...item,
            id: PAIR_MAX + index,
        })
    }

    return [...records, ...recordsCopy]
}

export const embaralharCartas = records => {
    const newRecords = []

    while (records.length) {
        const index = Math.floor(Math.random() * records.length)

        newRecords.push(records[index])
        records.splice(index, 1)
    }

    return newRecords
}
