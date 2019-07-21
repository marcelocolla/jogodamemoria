import sortByKey from '~/helpers/sortByKey'

const initialState = []

// RECORD fields:
// {
//     name: 'Amanda', countRound: 5, date: new Date(),
// },

export const Types = {
    SAVE_RANKING: 'SAVE_RANKING',
}

export default function ranking(state = initialState, action = {}) {
    switch (action.type) {
        case Types.SAVE_RANKING:
            const { data } = action.payload,
                newItem = { ...data, date: new Date() },
                newRecords = sortByKey([...state, newItem], 'countRound')

            return newRecords

        default:
            return state
    }
}

// Action Creators
export const Creators = {
    onSaveRanking: data => ({
        type: Types.SAVE_RANKING,
        payload: { data },
    }),
}
