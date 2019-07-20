const initialState = [
    {
        id: 1,
        carta: 10,
        naipe: 'OURO',
        complete: true,
    },
    {
        id: 2,
        carta: 1,
        naipe: 'COPA',
    },
    {
        id: 3,
        carta: 3,
        naipe: 'OURO',
    },
    {
        id: 4,
        carta: 9,
        naipe: 'PAUS',
        complete: true,
    },
    {
        id: 5,
        carta: 1,
        naipe: 'COPA',
        visible: true,
    },
    {
        id: 6,
        carta: 8,
        naipe: 'PAUS',
        visible: true,
    },
    {
        id: 1,
        carta: 5,
        naipe: 'ESPADA',
    },
    {
        id: 2,
        carta: 1,
        naipe: 'COPA',
        complete: true,
    },
    {
        id: 3,
        carta: 7,
        naipe: 'OURO',
    },
    {
        id: 4,
        carta: 10,
        naipe: 'OURO',
        complete: true,
    },
    {
        id: 5,
        carta: 3,
        naipe: 'ESPADA',
        visible: true,
        complete: true,
    },
    {
        id: 6,
        carta: 9,
        naipe: 'PAUS',
        visible: true,
        complete: true,
    },
]

export default function playing(state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state
    }
}
