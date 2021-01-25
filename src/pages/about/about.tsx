import React from 'react'
import ArticleLayout from '../../components/layout/article-layout/article-layout'
import { BasePropsComponent } from '../../helper/base-props'
import style from './about.module.scss'


const About = React.memo(() => {
  console.log("About render")
  return <div>About</div>;
  <ArticleLayout id={style.about} title="About">
    <h1>About</h1>
  </ArticleLayout>
})

export default About