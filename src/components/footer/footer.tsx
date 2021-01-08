import React from 'react'
import { BaseProps } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-class'
import './footer.scss'

interface Props extends BaseProps {
}

const Footer: React.FC<Props> = React.memo((props) => {
  return <div className={combineCN(props.className, "")}
    id="footer"
    style={props.style}
  >

    {props.children}
  </div>
})

export default Footer