import type { FC } from 'react'
import { useEffect, useRef, memo } from 'react'
import { throttle } from '@base-stone/utils'

interface Props {
  src: string
}

interface Options {
  root: null
  rootMargin: string
  threshold: number
}

const LazyImage: FC<Props> = memo(({ src }) => {
  const imgRef = useRef<HTMLDivElement | any>(null)

  useEffect(() => {
    const options: Options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const handleScrollThrottled = throttle(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLDivElement
            if (!src) {
              return false
            }
            el.style.background = `url(${src}) no-repeat center top / cover`
            el.classList.add('ui-lazy-fade')
            observer.unobserve(el)
          }
        })
      }, 500)
      handleScrollThrottled(entries)
    }

    const observer = new IntersectionObserver(handleIntersection, options)
    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  return <div ref={imgRef} className="ui-lazy-bg"></div>
})

export default LazyImage
