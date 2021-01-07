import React from 'react';
import './not-found.css';

interface Props {

};

export const NotFound = (props: Props) => {
  return (
    <div className="not-found">
      <h1 className="page-title">404, not found</h1>
    </div>
  );
};