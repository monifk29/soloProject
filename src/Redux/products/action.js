import  Axios  from "axios"
import * as types from "./actionTypes"

const fetchDataReq = (payload) =>{
    return {
      type :types.FETCH_DATA_REQ,
      payload
    }
}

const fetchDataSuccess = (payload) =>{
    return {
      type :types.FETCH_DATA_SUCCESS,
      payload
    }
}

const fetchDataFail = (payload) =>{
    return {
      type :types.FETCH_DATA_FAIL,
      payload
    }
}

const fetchData = (payload) =>{
return(dispatch) => {
    dispatch(fetchDataReq());

Axios.get('/products').then(r => dispatch(fetchDataSuccess(r.data)).catch(e => dispatch(fetchDataFail(e.data))))
};
};

export {fetchData};