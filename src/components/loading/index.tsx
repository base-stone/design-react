import { FC, memo, TouchEvent } from 'react'
import { createRoot } from 'react-dom/client'

const Loading: FC = memo(() => {
  const handleStopPopup = (event: TouchEvent) => {
    event.stopPropagation()
    event.preventDefault()
  }
  return (
    <div className="ui-showLoading" onTouchMove={handleStopPopup}>
      <div className="ui-showLoading-cont">
        <div className="ui-showLoading-icon">
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
          <span className="bar4"></span>
          <span className="bar5"></span>
          <span className="bar6"></span>
          <span className="bar7"></span>
          <span className="bar8"></span>
          <span className="bar9"></span>
          <span className="bar10"></span>
          <span className="bar11"></span>
          <span className="bar12"></span>
        </div>
        <p className="cfff">正在加载中</p>
      </div>
    </div>
  )
})

let isLoading = true
let root: any = null
const container: any = document.createElement('div')

export const showLoading = () => {
  if (!isLoading) {
    return
  }
  document.body.appendChild(container)
  root = createRoot(container)
  root.render(<Loading />)
  isLoading = false
}
export const hideLoading = () => {
  if (!isLoading) {
    root.unmount()
    container.parentNode.removeChild(container)
    isLoading = true
  }
}
