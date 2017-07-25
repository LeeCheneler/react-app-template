import React from 'react'

import Demo from 'components/Demo'

const ButtonDemo = () =>
  <Demo title="Buttons">
    <ul className="ea-o-list ea-o-list--inline ea-o-list--bare ea-o-list--gutter ea-o-list--trench">
      <li className="ea-o-list__item">
        <button className="c-button c-button--alpha">Alpha</button>
      </li>
      <li className="ea-o-list__item">
        <button className="c-button c-button--alpha" disabled>Alpha</button>
      </li>
      <li className="ea-o-list__item">
        <button className="c-button c-button--beta">Beta</button>
      </li>
      <li className="ea-o-list__item">
        <button className="c-button c-button--beta" disabled>Beta</button>
      </li>
      <li className="ea-o-list__item">
        <button className="c-button c-button--alpha c-button--small">Alpha</button>
      </li>
      <li className="ea-o-list__item">
        <button className="c-button c-button--alpha c-button--small" disabled>Alpha</button>
      </li>
      <li className="ea-o-list__item">
        <button className="c-button c-button--beta c-button--small">Beta</button>
      </li>
      <li className="ea-o-list__item">
        <button className="c-button c-button--beta c-button--small" disabled>Beta</button>
      </li>
    </ul>
  </Demo>

export default ButtonDemo
