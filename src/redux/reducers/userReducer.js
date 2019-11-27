import { SET_USER } from '../actions'




export const initialState = JSON.parse(localStorage.getItem('user'))

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return state = action.payload;
    default:
      return state;
  }
}
