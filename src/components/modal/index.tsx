import { FC, TouchEvent, memo } from 'react'
import { createRoot } from 'react-dom/client'

interface ModalProps {
  title: string
  content: string
  cancelText: string
  confirmText: string
  cancelButton?: boolean | undefined
  success?(): void
  cancel?(): void
}

const Modal: FC<ModalProps> = memo((props) => {
  const {
    title,
    content,
    cancelText,
    confirmText,
    cancelButton = true,
    cancel = () => {},
    success = () => {}
  } = props
  const handleStopPopup = (event: TouchEvent) => {
    event.stopPropagation()
    event.preventDefault()
  }

  const successCallback = () => {
    success && success()
  }
  const cancelCallback = () => {
    cancel && cancel()
  }
  return (
    <div className="ui-mask" onTouchMove={handleStopPopup}>
      <div className="ui-showModal plr32 bgfff">
        <div className="ui-showModal-title tc">
          <h5 className="fs36 font-semiBold font-weight">{title}</h5>
        </div>
        <div className="ui-showModal-cont tc">
          <p className="fs28 lh44" dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
        <div className="ui-showModal-submit fs32 flex flex-h-between">
          {cancelButton && (
            <span className="tc" onClick={cancelCallback}>
              {cancelText}
            </span>
          )}
          <strong
            className={'tc ' + (!cancelButton ? 'confirm-row' : '')}
            onClick={successCallback}
          >
            {confirmText}
          </strong>
        </div>
      </div>
    </div>
  )
})

const showModal = ({ title, content, cancelText, confirmText, success, cancel }: ModalProps) => {
  let isClick = true
  const container: any = document.createElement('div')
  if (!isClick) {
    return
  }
  const removeElement = () => {
    root.unmount()
    container.remove()
    isClick = true
  }
  const root = createRoot(container)
  const props = {
    title,
    content,
    cancelText,
    confirmText,
    success: () => {
      success && success()
      removeElement()
    },
    cancel: () => {
      cancel && cancel()
      removeElement()
    }
  }
  document.body.appendChild(container)
  isClick = false
  root.render(<Modal {...props} />)
}

export default showModal
