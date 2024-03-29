const initialState = {
    countPair: 0,
    countRound: 0,
    completeGame: false,
    lastCard: {},
}

export const Types = {
    LOAD_NEW_GAME: 'LOAD_NEW_GAME',
    CREATE_NEW_GAME: 'CREATE_NEW_GAME',
    VERIFY_FINISH_GAME: 'VERIFY_FINISH_GAME',
    COMPLETE_GAME: 'COMPLETE_GAME',
    SAVE_LAST_CARD: 'SAVE_LAST_CARD',
    SUM_PAIR_CARD: 'SUM_PAIR_CARD',
    START_NEW_ROUND_CARD: 'START_NEW_ROUND_CARD',
}

export default function playing(state = initialState, action = {}) {
    switch (action.type) {
        case Types.CREATE_NEW_GAME:
            return initialState

        case Types.SAVE_LAST_CARD:
            const { data } = action.payload

            return { ...state, lastCard: data }

        case Types.START_NEW_ROUND_CARD:
            const countRound = state.countRound + 1

            return { ...state, countRound, lastCard: {} }

        case Types.SUM_PAIR_CARD:
            const countPair = state.countPair + 1

            return { ...state, countPair }

        case Types.COMPLETE_GAME:
            return { ...state, completeGame: true }

        default:
            return state
    }
}

// Action Creators
export const Creators = {
    createNewGame: data => ({
        type: Types.CREATE_NEW_GAME,
        payload: { data },
    }),

    saveLastCard: data => ({
        type: Types.SAVE_LAST_CARD,
        payload: { data },
    }),

    startNewRoundCart: () => ({
        type: Types.START_NEW_ROUND_CARD,
    }),

    sumPairOfCards: () => ({
        type: Types.SUM_PAIR_CARD,
    }),

    verifyFinishGame: () => ({
        type: Types.VERIFY_FINISH_GAME,
    }),

    completeGame: () => ({
        type: Types.COMPLETE_GAME,
    }),
}
