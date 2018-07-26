import { MY_ACTION } from 'constants/actionTypes'

export function myAction(payload) {
  return { type: MY_ACTION, payload }
}