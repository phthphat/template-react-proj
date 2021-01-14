import React from 'react'
import { createPortal } from 'react-dom'
import { BaseProps } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-classname'
import './modal.scss'

interface Props extends BaseProps {
  onRemove?: () => void
}

const Modal: React.FC<Props> = React.memo((props) => {
  return createPortal(
    <div className={combineCN(props.className, "modal")}
      id={props.id}
      style={props.style}
    >

      {props.children}
    </div>,
    document.getElementById("wrap-popup")
  )
})

export default Modal