import React from 'react'
import { BaseProps } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-class'
import './about.css'

interface Props extends BaseProps {
}

const about: React.FC<Props> = React.memo((props) => {
  return <div className={combineCN(props.className, "")}
    id={props.id}
    style={props.style}
  >

    {props.children}
  </div>
})

export default about