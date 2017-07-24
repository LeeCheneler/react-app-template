import React from 'react'

const FormDemo = () =>
  <div>
    <div className="ea-u-soft-bottom">
      <h3>Textboxes</h3>
      <div className="ea-o-grid ea-o-grid--gutter ea-o-grid--gutter ea-o-grid--trench">
        <div className="ea-o-grid__item ea-u-1/2@xs">
          <label htmlFor="firstName">First name:</label>
          <input id="firstName" className="c-textbox" placeholder="First name" />
        </div>
        <div className="ea-o-grid__item ea-u-1/2@xs">
          <label htmlFor="lastName">Last name:</label>
          <input id="lastName" className="c-textbox" placeholder="Last name" disabled />
        </div>
        <div className="ea-o-grid__item">
          <label htmlFor="address">Address:</label>
          <input id="address" className="c-textbox" placeholder="Address" />
        </div>
        <div className="ea-o-grid__item">
          <label htmlFor="bio">Bio:</label>
          <textarea id="bio" className="c-textbox" placeholder="Bio" />
        </div>
      </div>
      <h3>Checkbox</h3>
      <ul className="ea-o-list ea-o-list--bare ea-o-list--trench">
        <li className="ea-o-list__item">
          <div className="c-input">
            <input className="c-input__input" id="cb_enabled" type="checkbox" />
            <label className="c-input__label" htmlFor="cb_enabled">Enabled</label>
          </div>
        </li>
        <li className="ea-o-list__item">
          <div className="c-input">
            <input className="c-input__input" id="cb_disabled" type="checkbox" disabled />
            <label className="c-input__label" htmlFor="cb_disabled">Disabled</label>
          </div>
        </li>
        <li className="ea-o-list__item">
          <div className="c-input">
            <input className="c-input__input" id="cb_checkedDisabled" type="checkbox" disabled checked />
            <label className="c-input__label" htmlFor="cb_checkedDisabled">Checked Disabled</label>
          </div>
        </li>
      </ul>
      <h3>Radio List</h3>
      <ul className="ea-o-list ea-o-list--bare ea-o-list--trench">
        <li className="ea-o-list__item">
          <div className="c-input">
            <input className="c-input__input" id="rb_enabled_1" type="radio" name="group" />
            <label className="c-input__label" htmlFor="rb_enabled_1">Enabled</label>
          </div>
        </li>
        <li className="ea-o-list__item">
          <div className="c-input">
            <input className="c-input__input" id="rb_enabled_2" type="radio" name="group" />
            <label className="c-input__label" htmlFor="rb_enabled_2">Enabled</label>
          </div>
        </li>
        <li className="ea-o-list__item">
          <div className="c-input">
            <input className="c-input__input" id="rb_disabled" type="radio" name="group" disabled />
            <label className="c-input__label" htmlFor="rb_disabled">Disabled</label>
          </div>
        </li>
      </ul>
    </div>
  </div>

export default FormDemo
