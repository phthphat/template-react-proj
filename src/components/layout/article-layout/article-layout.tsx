import React from 'react'
import { Helmet } from 'react-helmet'
import { BasePropsPage } from '../../../helper/base-props'
import { combineCN } from '../../../helper/combine-classname'
import siteInfo from '../../../site-info.json'
import style from './article-layout.module.scss'

interface Props extends BasePropsPage {
  title?: string
}

const ArticleLayout: React.FC<Props> = React.memo((props) => {
  return <div
    id={style.articleLayout}
    style={props.style}
  >
    <Helmet>
      <title>{props.title ?? "Page"} - {siteInfo.title}</title>
    </Helmet>
    <main
      className={combineCN(style.layout, props.className)}
      id={props.id}
    >
      {props.children}
    </main>
  </div>
})

export default ArticleLayout