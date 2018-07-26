import { MY_ACTION } from 'constants/actionTypes'

export const INITIAL_STATE = {
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    case MY_ACTION:
      return { ...state, ...action.payload }

    default:
      return state
  }
}