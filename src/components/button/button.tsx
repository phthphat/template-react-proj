import React from 'react'
import { BaseProps } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-class'
import './button.scss'
interface Props extends BaseProps {
  onClick?: () => void
}

const Button: React.FC<Props> = React.memo((props) => {
  console.log("Button rendered")

  return <button
    className={combineCN(props.className, "")}
    id={props.id}
    onClick={props.onClick}
    style={props.style}>
    Click me!
    {props.children}
  </button>
})

export default Button