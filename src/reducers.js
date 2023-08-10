import { CHANGE_SEARCH_FIELD } from "./actionsConstants.js";

const initialState = { 
    searchField: ""
}

export const searchRobots = (state=initialState, action={payload: ""}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }
}