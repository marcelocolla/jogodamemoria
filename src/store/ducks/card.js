const initialState = []

export const Types = {
    CREATE_NEW_GAME_CARD: 'CREATE_NEW_GAME_CARD',
    SHOW_CARD: 'SHOW_CARD',
    UPDATE_CARD: 'UPDATE_CARD',
    NEW_ROUND_CARD: 'NEW_ROUND_CARD',
}

export default function cards(state = initialState, action = {}) {
    switch (action.type) {
        case Types.CREATE_NEW_GAME_CARD:
            return action.payload.data || []

        case Types.UPDATE_CARD:
            const { data, isEqCard } = action.payload,
                { complete, visible, id } = data || {}

            if (complete || visible) {
                return state
            }

            return state.map(item => {
                if (item.id === id) {
                    const complete = item.complete || isEqCard

                    item = { ...item, complete, visible: true }
                }

                return item
            })

        case Types.NEW_ROUND_CARD:
            return state.map(item => ({ ...item, visible: false }))

        default:
            return state
    }
}

// Action Creators
export const Creators = {
    createNewGame: data => ({
        type: Types.CREATE_NEW_GAME_CARD,
        payload: { data },
    }),

    updateCart: ({ data, isEqCard }) => ({
        type: Types.UPDATE_CARD,
        payload: { data, isEqCard },
    }),

    newRoundCart: () => ({
        type: Types.NEW_ROUND_CARD,
    }),
}
