import { Alert } from "react-bootstrap"
import * as api from "../api"

export const getUser = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers()
    dispatch({ type: "FETCH_ALL", payload: data })
  } catch (error) {
    console.log(error.message)
  }
}

export const createUser = (user) => async (dispatch) => {
  try {
    const res = await api.createUser(user)
    if (res.status == 208) {
      alert("User Exists")
    } else if (res.status == 201) {
      alert("User Created")
      dispatch({ type: "CREATE", payload: res.data })
      window.location.replace("/records")
    } else {
      alert("User Created!!!!")
    }
    console.log(res)
  } catch (error) {
    alert("User Created")
    console.log(error.message)
  }
}
