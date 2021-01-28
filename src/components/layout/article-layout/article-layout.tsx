import { motion } from 'framer-motion'
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
    <motion.main
      className={combineCN(style.layout, props.className)}
      id={props.id}

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {props.children}
    </motion.main>
  </div>
})

export default ArticleLayout