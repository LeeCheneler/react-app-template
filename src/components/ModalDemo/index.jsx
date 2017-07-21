import React from 'react'

import Modal from 'components/Modal'

class ModalDemo extends React.Component {
  constructor() {
    super()
    this.state = { modalActivated: false }
    this.activateModal = this.activateModal.bind(this)
    this.deactivateModal = this.deactivateModal.bind(this)
  }

  activateModal() {
    this.setState(() => ({ modalActivated: true }))
    document.body.className = 'c-site has-overlay'
  }

  deactivateModal() {
    this.setState(() => ({ modalActivated: false }))
    document.body.className = 'c-site'
  }

  render() {
    return (
      <div>
        <h2>Modal Demo</h2>
        <div>
          <input />
        </div>
        <button onClick={this.activateModal}>Popup</button>
        <Modal isOpen={this.state.modalActivated}>
          <button onClick={this.deactivateModal}>Close</button>
        </Modal>
      </div>
    )
  }
}

export default ModalDemo
