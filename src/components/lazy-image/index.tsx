import { useEffect, FC, createRef, RefObject, memo } from 'react'
import { throttle } from '@base-stone/librarys'

interface Props {
  src: string
}
const LazyImage: FC<Props> = memo((props) => {
  const { src } = props

  const imgRef: RefObject<HTMLDivElement> = createRef()

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
      image.addEventListener(
        'load',
        () => {
          el.style.background = `url(${src}) no-repeat center top / cover`
          el.classList.add('ui-lazyLoad-fade')
        },
        false
      )
      window.removeEventListener('scroll', throttleScroll)
    }
  }

  const throttleScroll = throttle(handleScroll, 500)

  useEffect(() => {
    window.addEventListener('scroll', throttleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', throttleScroll)
    }
  }, [])

  return <div ref={imgRef} className="ui-lazy-bg"></div>
})

export default LazyImage
