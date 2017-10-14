import React from 'react'
import { shallow } from 'enzyme'

import SVGIcon from '..'

describe('<SVGIcon />', () => {
  const svg = {
    id: 'svg'
  }
  const className = 'classy'
  const $ = shallow(<SVGIcon svg={svg} className={className} />)

  it(`renders a single <svg role="presentation" className="${className}">`, () => {
    expect($.prop('role')).toBe('presentation')
    expect($.hasClass(className)).toBe(true)
  })

  it(`renders a <use xlinkHref="#${svg.id}"> within the <svg> tag`, () => {
    expect($.find('use').prop('xlinkHref')).toBe(`#${svg.id}`)
  })
})
