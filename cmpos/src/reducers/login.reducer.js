import { LOGIN_FETCHING } from "../constants"

const initialState = {
    result: null,
    isFetching: false,
    isError: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case LOGIN_FETCHING:
        return { ...state, ...payload }

    default:
        return state
    }
}
