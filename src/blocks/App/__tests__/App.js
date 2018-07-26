import App from '../App'

describe('App Block', () => {
  it('matches snapshot', () => {
    const tree = render(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})