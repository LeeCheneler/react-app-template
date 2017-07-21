import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ children, isOpen, labelledBy, describedBy }) =>
  <div
    role="dialog"
    aria-labelledby={labelledBy}
    aria-describedby={describedBy}
    className={`c-modal${isOpen ? ' is-open' : ''}`}
  >
    <div className="c-modal__background" />
    <div className="c-modal__box">
      {children}
    </div>
  </div>

Modal.propTypes = {
  children: PropTypes.shape().isRequired,
  isOpen: PropTypes.bool.isRequired,
  labelledBy: PropTypes.string.isRequired,
  describedBy: PropTypes.string.isRequired
}

export default Modal
