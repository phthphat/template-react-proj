import React from 'react'
import { BaseProps } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-class'
import './nav.scss'

interface Props extends BaseProps {
}

const Nav: React.FC<Props> = React.memo((props) => {
  return <div className={combineCN(props.className, "")}
    id="nav-bar"
    style={props.style}
  >

    {props.children}
  </div>
})

export default Nav