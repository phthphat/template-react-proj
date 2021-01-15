import React from 'react'
import { BasePropsComponent } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-classname'
import style from './button.module.scss'
interface Props extends BasePropsComponent {
  onClick?: () => void
}

const Button: React.FC<Props> = React.memo((props) => {
  console.log("Button rendered")

  return <button
    className={combineCN(props.className, style.button)}
    onClick={props.onClick}
    style={props.style}>
    Click me!
    {props.children}
  </button>
})

export default Button