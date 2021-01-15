import React from 'react'
import ArticleLayout from '../../components/layout/article-layout/article-layout'
import { BasePropsComponent } from '../../helper/base-props'
import style from './about.module.scss'

interface Props extends BasePropsComponent {
}

const About: React.FC<Props> = React.memo((props) => {
  return <ArticleLayout id={style.about} title="About">
    <h1>About</h1>
  </ArticleLayout>
})

export default About