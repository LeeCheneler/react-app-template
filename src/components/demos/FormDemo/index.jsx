import React from 'react'

const FormDemo = () =>
  <div>
    <h2>Form Controls</h2>
    <div className="ea-u-soft-bottom">
      <h3>Text Input</h3>
      <div className="ea-o-grid ea-o-grid--gutter ea-o-grid--gutter ea-o-grid--trench">
        <div className="ea-o-grid__item ea-u-1/2@xs">
          <input className="c-textbox" placeholder="First name" />
        </div>
        <div className="ea-o-grid__item ea-u-1/2@xs">
          <input className="c-textbox" placeholder="Last name" disabled />
        </div>
        <div className="ea-o-grid__item">
          <input className="c-textbox" placeholder="Address" />
        </div>
        <div className="ea-o-grid__item">
          <textarea className="c-textbox" placeholder="Bio" />
        </div>
      </div>
    </div>
  </div>

export default FormDemo
