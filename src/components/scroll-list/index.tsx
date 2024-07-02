import type { FC, ReactNode } from 'react'
import { memo, useEffect } from 'react'
import { getFontSize, getPassiveValue, throttle } from '@base-stone/utils'

interface Props {
  finished: boolean
  children: ReactNode
  scrollEl?: string
  onLoad: () => void
}

const ScrollList: FC<Props> = memo((props) => {
  const { finished, onLoad, children, scrollEl = '.scroll-view-wrapper' } = props

  const scrollLoadList = throttle(() => {
    const el: HTMLElement | any = document.querySelector(scrollEl)
    const elHeight: number = el.offsetHeight
    const scrollTop: number = el.scrollTop
    const scrollViewHeight: number = el.scrollHeight - 0.5 * getFontSize()
    if (elHeight + scrollTop >= scrollViewHeight && !finished) {
      onLoad()
    }
  }, 600)

  useEffect(() => {
    const isPassive: any = getPassiveValue()
    window.addEventListener('scroll', scrollLoadList, isPassive)
    return () => {
      window.removeEventListener('scroll', scrollLoadList, isPassive)
    }
  }, [])

  return <div>{children}</div>
})

export default ScrollList
