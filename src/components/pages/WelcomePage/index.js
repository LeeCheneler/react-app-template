import { connect } from 'react-redux'

import WelcomePage from './WelcomePage'

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

const WelcomePageContainer = connect(mapStateToProps)(WelcomePage)

export default WelcomePageContainer
