import React from 'react'
import PropTypes from 'prop-types'

const Modal = ({ aria: { labelledBy, describedBy }, children, isOpen, onRequestClose }) =>
  /* eslint-disable jsx-a11y/no-static-element-interactions*/
  <div
    role="dialog"
    aria-labelledby={labelledBy}
    aria-describedby={describedBy}
    className={`c-modal${isOpen ? ' is-open' : ''}`}
  >
    <div className="c-modal__background" onClick={onRequestClose} />
    <div className="c-modal__box">
      {children}
    </div>
  </div>

Modal.propTypes = {
  aria: PropTypes.shape({
    labelledBy: PropTypes.string.isRequired,
    describedBy: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.shape().isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func
}

Modal.defaultProps = {
  onRequestClose: null
}

export default Modal
