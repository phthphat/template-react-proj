import React from 'react'
import { useSetRecoilState } from 'recoil'
import Button from '../../components/button/button'
import CommonLayout from '../../components/layout/common-layout/common-layout'
import { countState } from '../../state/user-state'
import './homepage.css'

export const Homepage = React.memo(() => {

  const setCount = useSetRecoilState(countState)
  console.log("Homepage rendered")

  return <CommonLayout title="Homepage">
    <div>
      <h1>Hello world</h1>
      <Button onClick={() => { setCount(val => val + 1) }}>
        <p>Ahihi</p>
      </Button>
    </div>
  </CommonLayout>
})