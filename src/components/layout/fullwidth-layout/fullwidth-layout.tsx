import React from 'react'
import { Helmet } from 'react-helmet'
import { BasePropsPage } from '../../../helper/base-props'
import { combineCN } from '../../../helper/combine-classname'
import style from './fullwidth-layout.module.scss'
import siteInfo from '../../../site-info.json'

interface Props extends BasePropsPage {
  title?: string
}

const FullWidthLayout: React.FC<Props> = React.memo((props) => {
  return <main className={combineCN(props.className, style.fullWidthLayout)}
    id={props.id}
    style={props.style}
  >
    <Helmet>
      <title>{props.title ?? "Page"} - {siteInfo.title}</title>
    </Helmet>
    {props.children}
  </main>
})

export default FullWidthLayout