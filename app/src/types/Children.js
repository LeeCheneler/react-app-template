import T from 'prop-types'

const Children = T.oneOfType([
  T.shape(),
  T.arrayOf(T.shape()),
  T.string
])

export default Children
