import React from 'react'
import Button from '../../components/button/button'
import CommonLayout from '../../components/layout/common-layout/common-layout'
import './homepage.css'

export const Homepage = () => {
  return <CommonLayout title="Homepage">
    <div>
      <h1>Hello world</h1>
      <Button>
        <p>Ahihi</p>
      </Button>
    </div>
  </CommonLayout>
}