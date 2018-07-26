import reducer, { INITIAL_STATE } from '../myReducer'
import { MY_ACTION } from 'constants/actionTypes'

describe('myReducer', () => {
  it('returns INITIAL_STATE', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
  })
  it('handles MY_ACTION', () => {
    expect(
      reducer(INITIAL_STATE, {
        type: MY_ACTION,
        payload: { newVal: 'newVal' },
      })
    ).toEqual({
      ...INITIAL_STATE,
      newVal: 'newVal'
    })
  })
})