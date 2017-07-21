import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ children, isOpen }) =>
  <div className={`c-modal${isOpen ? ' is-open' : ''}`}>
    <div className="c-modal__background" />
    <div className="c-modal__box">
      {children}
    </div>
  </div>

Modal.propTypes = {
  children: PropTypes.shape().isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Modal
