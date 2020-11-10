const initialState = {
    isFetching: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "FETCHING":
        return { ...state, isFetching: true, }

    default:
        return state
    }
}
