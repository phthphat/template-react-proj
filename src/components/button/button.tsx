import React, { useCallback } from 'react'
import { BaseProps } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-class'
import './button.css'
interface Props extends BaseProps {
  onClick?: () => void
}

const Button: React.FC<Props> = React.memo((props) => {
  let onClickCallBack = props.onClick ? useCallback(props.onClick, []) : undefined
  console.log("Button rendered")

  return <button
    id={props.id}
    className={combineCN(props.className, "button")}
    onClick={onClickCallBack}
    style={props.style}>
    Click me!
    {props.children}
  </button>
})

export default Button