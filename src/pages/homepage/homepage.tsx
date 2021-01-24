import React, { useCallback, useState } from 'react'
import { Spring } from 'react-spring/renderprops'
import { useSetRecoilState } from 'recoil'
import Button from '../../components/button/button'
import FullWidthLayout from '../../components/layout/fullwidth-layout/fullwidth-layout'
import Modal from '../../components/modal/modal'
import { useFetch } from '../../networking/api-hook/use-fetch'
import { countState } from '../../state/user-state'
import style from './homepage.module.scss'

export const Homepage = React.memo(() => {

  const setCount = useSetRecoilState(countState)
  const [modal, setModal] = useState(false)
  console.log("Homepage rendered")
  const setModal_Op = useCallback(() => setModal(val => !val), [setModal])

  let { loading, data, errMsg } = useFetch("https://jsonplaceholder.typicode.com/todos/1?", "GET")

  return <FullWidthLayout id={style.homepage} title="Homepage">
    <div>{loading ? "Loading" : "Done"} {JSON.stringify(data)} {errMsg}</div>
    <button onClick={setModal_Op}>Show modal</button>
    <h1>Hello world</h1>
    <Button onClick={() => { setCount(val => val + 1) }}>
      <p>Ahihi</p>
    </Button>
    {
      modal &&
      <Spring
        from={{ opacity: 0.5 }}
        to={{ opacity: 1 }}
        config={{ duration: 200 }}
      >
        {
          props => (
            <Modal>
              <div style={{ ...props, padding: 10, width: 300, height: 300, justifyContent: 'space-between', backgroundColor: 'white' }}>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero blanditiis inventore labore?</p>
                <button onClick={setModal_Op}>
                  Close
          </button>
              </div>
            </Modal>
          )
        }

      </Spring>
    }
  </FullWidthLayout>
})