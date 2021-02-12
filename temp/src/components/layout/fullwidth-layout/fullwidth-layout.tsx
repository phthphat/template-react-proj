import React from 'react'
import { Helmet } from 'react-helmet'
import { BasePropsPage } from '../../../helper/base-props'
import { combineCN } from '../../../helper/combine-classname'
import style from './fullwidth-layout.module.scss'
import siteInfo from '../../../site-info.json'
import { motion } from 'framer-motion'

interface Props extends BasePropsPage {
  title?: string
}

const FullWidthLayout: React.FC<Props> = React.memo((props) => {
  return <motion.main className={combineCN(props.className, style.fullWidthLayout)}
    id={props.id}
    style={props.style}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2 }}
  >
    <Helmet>
      <title>{props.title ?? "Page"} - {siteInfo.title}</title>
    </Helmet>
    {props.children}
  </motion.main>
})

export default FullWidthLayout