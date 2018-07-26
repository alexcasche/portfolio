import { MY_ACTION } from 'constants/actionTypes'
import { myAction } from '../myAction'


describe('myAction', () => {
  it('should call action with payload', () => {
    const expectedAction = { type: MY_ACTION, payload: 'hello' }
    expect(myAction('hello')).toEqual(expectedAction)
  })
})