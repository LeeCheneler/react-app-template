import title from 'store/title/reducer'

describe('title reducer', () => {
  it('should return the correct title', () => {
    expect(title()).toBe('React App Template!')
  })
})
