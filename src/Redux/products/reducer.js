import * as types from "./actionTypes"

const initialState = {
    products : [],
    error : ""
}

const productReducer = (state = initialState,action) => {
    const {type, payload} = action;

    switch(type){
case types.FETCH_DATA_REQ :
    return {
        ...state,
        error : ""
    }

    case types.FETCH_DATA_SUCCESS :
        return {
            ...state,
            products : payload,
            error : ""
        }

        case types.FETCH_DATA_FAIL :
    return {
        ...state,
        error : payload
    }

    default :
    return state;
    }
}

export {productReducer};