import titleReducer from 'store/titleReducer'

describe('titleReducer', () => {
  it('should return the correct title', () => {
    expect(titleReducer()).toBe('React App Template!')
  })
})
