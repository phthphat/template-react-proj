import React, { useCallback, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import Button from '../../components/button/button'
import FullWidthLayout from '../../components/layout/fullwidth-layout/fullwidth-layout'
import Modal from '../../components/modal/modal'
import { countState } from '../../state/user-state'
import style from './homepage.module.scss'

export const Homepage = React.memo(() => {

  const setCount = useSetRecoilState(countState)
  const [modal, setModal] = useState(false)
  console.log("Homepage rendered")
  const setModal_Op = useCallback(() => setModal(val => !val), [setModal])

  return <FullWidthLayout id={style.homepage} title="Homepage">
    <button onClick={setModal_Op}>Show modal</button>
    <h1>Hello world</h1>
    <Button onClick={() => { setCount(val => val + 1) }}>
      <p>Ahihi</p>
    </Button>
    {
      modal && <Modal>
        <div style={{ padding: 10, width: 300, height: 300, justifyContent: 'space-between', backgroundColor: 'white' }}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero blanditiis inventore labore?</p>
          <button onClick={setModal_Op}>
            Close
          </button>
        </div>
      </Modal>
    }
  </FullWidthLayout>
})