import messageReducer from './../messageReducer'

describe('messageReducer', () => {
  it('should return "Hello world!"', () => {
    expect(messageReducer()).toBe('Hello world!')
  })
})
