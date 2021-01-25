import React from 'react'
import { createPortal } from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { BasePropsComponent } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-classname'
import style from './modal.module.scss'

interface Props extends BasePropsComponent {
  onRemove?: () => void
}

const Modal: React.FC<Props> = React.memo((props) => {
  let animateProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 200, delay: 100 }
  })
  return createPortal(
    <div className={combineCN(props.className, style.modal)}
      style={props.style}
    >
      <animated.dialog style={animateProps}>
        {props.children}
      </animated.dialog>
    </div>,
    document.getElementById("wrap-modal")
  )
})

export default Modal