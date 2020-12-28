import React, { useCallback, useEffect } from 'react'

interface Props {
  onClick: () => void
}

const Button: React.FC<Props> = (props) => {
  let onClickCallBack = useCallback(props.onClick, [])
  console.log("Button rendered")
  return <button onClick={onClickCallBack}>
    Click me!
  </button>
}
export default React.memo(Button)