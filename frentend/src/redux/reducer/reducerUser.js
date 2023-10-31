import { ADD } from "../action-type/Action-type"

const initialState = {}

export const reducerUser = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD:
    localStorage.setItem("token",payload.token)
    return (state=payload.user)

  default:
    return state
  }
}
