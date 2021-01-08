import React from 'react'
import { Helmet } from 'react-helmet'
import { BaseProps } from '../../../helper/base-props'
import { combineCN } from '../../../helper/combine-class'
import siteInfo from '../../../site-info.json'
import './common-layout.scss'

interface Props extends BaseProps {
  title?: string
}

const CommonLayout: React.FC<Props> = React.memo((props) => {
  return <div className={combineCN(props.className, "")}
    id="common-layout"
    style={props.style}
  >
    <Helmet>
      <title>{props.title ?? "Page"} - {siteInfo.title}</title>
    </Helmet>
    <div className="layout">
      {props.children}
    </div>
  </div>
})

export default CommonLayout