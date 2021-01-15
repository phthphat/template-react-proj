import React from 'react';
import ArticleLayout from '../../components/layout/article-layout/article-layout';
import style from './not-found.module.scss';

interface Props {

};

export const NotFound = (props: Props) => {
  return (
    <ArticleLayout title="Not found">
      <div id={style.notFound}>
        <h1 className="page-title">404, not found</h1>
      </div>
    </ArticleLayout>
  );
};
