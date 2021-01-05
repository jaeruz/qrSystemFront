import { Alert } from 'react-bootstrap';
import * as api from '../api'

export const getPurposes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPurposes();
        dispatch({ type: 'FETCH_PURPOSES', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const addPurpose = (purpose) => async (dispatch) => {
    try {
        const res = await api.addPurpose(purpose)
        dispatch({ type: 'CREATE', payload: res.data })
        // if (res.status == 208) {
        //     alert("User Exists")
        // } else if(res.status == 201) {
        //     dispatch({ type: 'CREATE', payload: res.data })
        //     alert("User Created")
        //     window.location.replace('/records');
        // }
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}