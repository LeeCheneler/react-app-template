import React from 'react'

import Modal from 'components/Modal'
import SVGIcon from 'components/utilities/SVGIcon'

import CloseIcon from 'assets/icons/close.svg'

const ESC_KEY_CODE = 27
const KEY_UP_EVENT = 'keyup'
const FOCUS_EVENT = 'focus'

class ModalDemo extends React.Component {
  constructor() {
    super()
    this.state = { modalActivated: false }
    this.activateModal = this.activateModal.bind(this)
    this.deactivateModal = this.deactivateModal.bind(this)
    this.handleEscapeKeyHit = this.handleEscapeKeyHit.bind(this)
    this.handleElementFocused = this.handleElementFocused.bind(this)
  }

  componentDidUpdate() {
    if (this.state.modalActivated) {
      this.closeModalButton.focus()
      document.addEventListener(FOCUS_EVENT, this.handleElementFocused, true)
    }
  }

  activateModal() {
    this.setState(() => ({ modalActivated: true }))
    document.body.className = 'u-has-overlay'
    document.addEventListener(KEY_UP_EVENT, this.handleEscapeKeyHit)
  }

  deactivateModal() {
    this.setState(() => ({ modalActivated: false }))
    document.body.className = ''
    document.removeEventListener(KEY_UP_EVENT, this.handleEscapeKeyHit)
    document.removeEventListener(FOCUS_EVENT, this.handleElementFocused, true)
    this.openModalButton.focus()
  }

  handleEscapeKeyHit({ keyCode }) {
    if (keyCode === ESC_KEY_CODE) {
      this.deactivateModal()
    }
  }

  // If a focus attempt is made on anything other than the modal's close button
  // then prevent it from propogating and focus back on the modal close button
  handleElementFocused(e) {
    if (e.target.id !== this.closeModalButton.id) {
      e.stopPropagation()
      this.closeModalButton.focus()
    }
  }

  render() {
    /* eslint-disable max-len */
    return (
      <div>
        <h3>Modal</h3>
        <div className="ea-u-soft-bottom">
          <span>
            A simple, accessible modal.
        </span>
        </div>
        <div>
          <button
            className="c-button c-button--alpha"
            onClick={this.activateModal}
            ref={(x) => { this.openModalButton = x }}
          >
            Open Modal
        </button>
        </div>
        <Modal
          aria={{ labelledBy: 'modalHeading', describedBy: 'modalContent' }}
          isOpen={this.state.modalActivated}
          onRequestClose={this.deactivateModal}
        >
          <div className="ea-u-soft">
            <div className="ea-u-text-align-right">
              <button
                id="closeModal"
                className="c-icon-button"
                onClick={this.deactivateModal}
                title="Close"
                ref={(x) => { this.closeModalButton = x }}
              >
                <SVGIcon svg={CloseIcon} />
              </button>
            </div>
            <h3 id="modalHeading">Heading</h3>
            <p id="modalContent">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          </div>
        </Modal>
      </div>
    )
    /* eslint-enable max-len */
  }
}

export default ModalDemo
