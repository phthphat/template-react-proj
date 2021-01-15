import React from 'react'
import { createPortal } from 'react-dom'
import { BasePropsComponent } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-classname'
import style from './modal.module.scss'

interface Props extends BasePropsComponent {
  onRemove?: () => void
}

const Modal: React.FC<Props> = React.memo((props) => {
  return createPortal(
    <div className={combineCN(props.className, style.modal)}
      style={props.style}
    >
      {props.children}
    </div>,
    document.getElementById("wrap-modal")
  )
})

export default Modal