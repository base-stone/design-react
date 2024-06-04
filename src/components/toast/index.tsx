import { FC, memo } from 'react'
import { createRoot } from 'react-dom/client'

interface ToastProps {
  text: string
}

let isClick = true

const container: any = document.createElement('div')


const Toast: FC<ToastProps> = memo(({ text }) => {
  return (
    <div className="ui-toast-mask">
      <div className="ui-toast tc">
        <span className="fs30">{text}</span>
      </div>
    </div>
  )
})

const showToast = (text: string) => {
  if (!isClick) {
    return
  }
  document.body.appendChild(container)
  const root = createRoot(container)
  root.render(<Toast text={text} />)
  isClick = false
  setTimeout(() => {
    root.unmount()
    container.remove()
    isClick = true
  }, 2000)
}

export default showToast
