import { useEffect, useRef, useState } from "react"
import throttle from "throttleit"
/**
 * 
 * @param delay delay in milisecond to update x and y, `default: 100`
 */
export const useScrollPosition = (delay: number = 100) => {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const ref = useRef(true)

  useEffect(() => {
    return () => {
      ref.current = false
    }
  }, [ref])

  useEffect(() => {
    const handleListener = () => {
      var doc = document.documentElement;
      var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (ref.current) {
        setX(left); setY(top)
      }
    }
    window.addEventListener('scroll', throttle(handleListener, delay))

    return () => {
      window.removeEventListener('scroll', handleListener)
    }
  }, [setX, setY])
  return { x, y }
}