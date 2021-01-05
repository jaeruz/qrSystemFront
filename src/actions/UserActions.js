import { Alert } from 'react-bootstrap';
import * as api from '../api'

export const getUser = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createUser = (user) => async (dispatch) => {
    try {
        const res = await api.createUser(user)
        if (res.status == 208) {
            alert("User Exists")
        } else if(res.status == 201) {
            dispatch({ type: 'CREATE', payload: res.data })
            alert("User Created")
            window.location.replace('/records');
        }
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}