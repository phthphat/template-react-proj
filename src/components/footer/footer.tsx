import React from 'react'
import { BasePropsComponent } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-classname'
import style from './footer.module.scss'

interface Props extends BasePropsComponent {
}

const Footer: React.FC<Props> = React.memo((props) => {
  return <footer className={combineCN(props.className, "")}
    id={style.footer}
    style={props.style}
  >
    <label className={style.item}>P</label>
    {props.children}
  </footer>
})

export default Footer