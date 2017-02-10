import { connect } from 'react-redux'

import WelcomePage from './WelcomePage'

const mapStateToProps = (state) => {
  return {
    title: state.title
  }
}

const WelcomePageContainer = connect(mapStateToProps)(WelcomePage)

export default WelcomePageContainer
