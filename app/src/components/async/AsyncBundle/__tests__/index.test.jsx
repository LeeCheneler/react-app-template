import React from 'react'
import { shallow } from 'enzyme'

import AsyncBundle from '..'

describe('<AsyncBundle />', () => {
  const mockLoadCallback = jest.fn()
  const mockLoad = jest.fn()
  const loadingComponent = () => <span>loading</span>
  const $ = shallow((
    <AsyncBundle load={mockLoad} loadingComponent={loadingComponent}>
      {mockLoadCallback}
    </AsyncBundle>
  ))

  it('displays loadingComponent while loading', () => {
    expect($.find('span').length).toBe(1)
  })

  it('passes loaded commonjs module into loaded callback', () => {
    const commonJsModule = { default: 'hello' }
    mockLoad.mock.calls[0][0](commonJsModule)
    expect(mockLoadCallback.mock.calls[0][0]).toBe(commonJsModule.default)
  })

  it('passes loaded javascript module into loaded callback', () => {
    const javascriptModule = 'world'
    mockLoad.mock.calls[0][0](javascriptModule)
    expect(mockLoadCallback.mock.calls[1][0]).toBe(javascriptModule)
  })

  it('does not reload the same module', () => {
    $.setProps({
      load: mockLoad
    })
    expect(mockLoad.mock.calls.length).toBe(1)
  })

  it('does not display loadingComponent once loaded', () => {
    expect($.find('span').length).toBe(0)
  })
})
