import type { FC, ReactNode } from 'react'
import { memo, useEffect, useRef } from 'react'
import { getPassiveValue, throttle } from '@base-stone/utils'

interface Props {
  finished: boolean
  loading: boolean
  children: ReactNode
  scrollEl?: string
  onLoad: () => void
}

const ScrollList: FC<Props> = memo((props) => {
  const { finished, onLoad, loading, children, scrollEl = '.scroll-view-wrapper' } = props

  const finishedRef = useRef<boolean|null>(null)
  const onLoadRef = useRef(onLoad)
  useEffect(() => {
    finishedRef.current = finished
  }, [finished])

  useEffect(() => {
    onLoadRef.current = onLoad
  }, [loading])

  const scrollLoadList = throttle(() => {
    const el: HTMLElement | any = document.querySelector(scrollEl)
    const elHeight: number = el.offsetHeight
    const scrollTop: number = el.scrollTop
    const scrollViewHeight: number = el.scrollHeight

    if (elHeight + scrollTop >= scrollViewHeight && !finishedRef.current) {
      onLoadRef.current && onLoadRef.current()
    }
  }, 500)

  useEffect(() => {
    const isPassive: any = getPassiveValue()
    window.addEventListener('scroll', scrollLoadList, isPassive)
    return () => {
      window.removeEventListener('scroll', scrollLoadList, isPassive)
    }
  }, [])

  return children
})

export default ScrollList
