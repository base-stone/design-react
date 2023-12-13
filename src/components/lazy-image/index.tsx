import { useEffect, FC, useRef, RefObject, memo } from 'react'
import { throttle } from '@base-stone/librarys'

interface Props {
  src: string
}
const LazyImage: FC<Props> = memo((props) => {
  const { src } = props

  const imgRef: RefObject<HTMLDivElement> = useRef(null)
  const handleScrollThrottled: any = useRef(null)


  const handleScroll = () => {
    const el: HTMLDivElement | any = imgRef.current
    const top = el.getBoundingClientRect().top
    const mw = el.offsetWidth
    const mh = el.offsetHeight
    const windowHeight = window.innerHeight
    if (mw != 0 && mh != 0 && top < windowHeight) {
      if (!src) {
        return false
      }
      const image = new Image()
      image.referrerPolicy = 'no-referrer'
      image.src = src
      const loadImage = () => {
        el.style.background = `url(${src}) no-repeat center top / cover`
        el.classList.add('ui-lazy-fade')
        image.removeEventListener('load', loadImage, false)
      }
      image.addEventListener('load', loadImage, false)
      window.removeEventListener('scroll', handleScrollThrottled.current)
    }
  }

  handleScrollThrottled.current = throttle(handleScroll, 500)

  useEffect(() => {
    window.addEventListener('scroll', handleScrollThrottled.current)
    handleScroll()
    return () => {
      if (handleScrollThrottled.current) {
        window.removeEventListener('scroll', handleScrollThrottled.current)
      }
    }
  }, [])

  return <div ref={imgRef} className="ui-lazy-bg"></div>
})

export default LazyImage
