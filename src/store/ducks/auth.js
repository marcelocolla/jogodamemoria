const initialState = {
    name: 'Usuário anônimo',
}

export const Types = {
    SAVE_USER: 'SAVE_USER',
    ADD_USER: 'ADD_USER',
}

export default function auth(state = initialState, action = {}) {
    switch (action.type) {
        case Types.ADD_USER:
            const { name } = action.payload.data

            return { ...state, name }

        default:
            return state
    }
}

// Action Creators
export const Creators = {
    saveUser: data => ({
        type: Types.ADD_USER,
        payload: { data },
    }),
}
