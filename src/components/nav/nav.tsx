import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { BasePropsComponent } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-classname'
import { countState } from '../../state/user-state'
import style from './nav.module.scss'
import config from '../../site-info.json'

interface Props extends BasePropsComponent {
}

const Nav: React.FC<Props> = React.memo((props) => {

  let count = useRecoilValue(countState)
  console.log("Nav rendered")
  return <nav className={combineCN(props.className,
    "flex")}
    id={style.navBar}
    style={props.style}
  >
    {count}
    {/* <Link to="/" className={style.item}>Home</Link>
    <Link to="/about" className={style.item}>About</Link>
    <Link to="/callback-recoil" className={style.item}>CallbackRecoil</Link> */}
    {
      config['nav-item'].map(val => {
        return <Link className={style.item} key={val.url} to={val.url}>
          {val.title}
        </Link>
      })
    }
    {props.children}
  </nav>
})

export default Nav