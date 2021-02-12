import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { createPortal } from 'react-dom'
import { BasePropsComponent } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-classname'
import style from './modal.module.scss'

interface Props extends BasePropsComponent {
  isShowing: boolean,
  onRemove?: () => void
}

const Modal: React.FC<Props> = React.memo((props) => {
  return <AnimatePresence>
    {
      props.isShowing && <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}

        className={combineCN(props.className, style.modal,
          "flex flex-col")}
        style={props.style}
      >
        {props.children}
      </motion.div>
    }
  </AnimatePresence>
})

export default Modal