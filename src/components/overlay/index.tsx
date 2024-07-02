import type { FC, MouseEvent, ReactNode, TouchEvent } from 'react'
import { memo } from 'react'
import classNames from 'classnames'

interface Props {
  visible: boolean
  fadeIn?: string
  maskClick?: boolean
  children: ReactNode
  onChange: (val: boolean) => void
}

const Overlay: FC<Props> = memo((props) => {
  const { maskClick = true, onChange, fadeIn = 'center', visible, children } = props
  const stopPopup = (event: TouchEvent) => {
    event.stopPropagation()
    event.preventDefault()
  }
  const handleMaskOverlay = (event: MouseEvent<HTMLDivElement>) => {
    if (maskClick) {
      event.stopPropagation()
      onChange(false)
    }
  }
  const overlayClass = classNames('ui-overlay-container', {
    'ui-overlay-container-bottom': fadeIn == 'bottom',
    'ui-overlay-container-bottom-active': visible && fadeIn == 'bottom',
    'ui-overlay-container-center': fadeIn == 'center',
    'ui-overlay-container-center-active': visible && fadeIn == 'center'
  })

  return (
    <>
      {visible && (
        <>
          <div className="ui-mask" onTouchMove={stopPopup} onClick={handleMaskOverlay}></div>
          <div className={overlayClass}>{children}</div>
        </>
      )}
    </>
  )
})

export default Overlay
