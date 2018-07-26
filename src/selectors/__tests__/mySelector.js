import { mySelector } from '../mySelector'

let state = {}

describe('mySelector', () => {
  it('should return correct state', () => {
    expect(mySelector(state)).toEqual(state)
  })
})