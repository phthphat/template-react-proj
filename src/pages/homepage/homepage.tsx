import React, { useCallback, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import Button from '../../components/button/button'
import CommonLayout from '../../components/layout/common-layout/common-layout'
import Modal from '../../components/modal/modal'
import { countState } from '../../state/user-state'
import './homepage.css'

export const Homepage = React.memo(() => {

  const setCount = useSetRecoilState(countState)
  const [modal, setModal] = useState(false)
  console.log("Homepage rendered")
  const setModal_Op = useCallback(() => setModal(val => !val), [setModal])

  return <CommonLayout title="Homepage">
    <div>
      <button onClick={setModal_Op}>Show modal</button>
      <h1>Hello world</h1>
      <Button onClick={() => { setCount(val => val + 1) }}>
        <p>Ahihi</p>
      </Button>
    </div>
    {
      modal && <Modal>
        <div style={{ backgroundColor: 'white', width: 300, height: 300 }}>
          <button onClick={setModal_Op}>
            Close
          </button>
        </div>
      </Modal>
    }
  </CommonLayout>
})