import React from 'react'
import { useRecoilValue } from 'recoil'
import { BaseProps } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-class-name'
import { countState } from '../../state/user-state'
import './nav.scss'

interface Props extends BaseProps {
}

const Nav: React.FC<Props> = React.memo((props) => {

  let count = useRecoilValue(countState)
  console.log("Nav rendered")
  return <div className={combineCN(props.className, "")}
    id="nav-bar"
    style={props.style}
  >
    {count}
    {props.children}
  </div>
})

export default Nav