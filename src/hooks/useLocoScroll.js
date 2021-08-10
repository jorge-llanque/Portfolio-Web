import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/src/locomotive-scroll.scss'

export default function useLocoScroll (start) {
  useEffect(() => {
    if (start) return
    const scrollEl = document.querySelector('#main-container')
    console.log(scrollEl)
    // eslint-disable-next-line no-unused-vars
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal'
    })
  }, [])
}
