import { FC, memo } from 'react'

interface Props {
  show: boolean
  bgColor?: string
}

const PageLoading: FC<Props> = memo((props) => {
  const { show, bgColor = 'transparent' } = props
  return (
    <div>
      {show && (
        <div
          className="ui-loading flex flex-v-center flex-h-center"
          style={{ backgroundColor: bgColor }}
        >
          <div className="ui-loading__spinner flex">
            <svg viewBox="25 25 50 50" className="ui-loading__circular">
              <circle cx="50" cy="50" r="20" fill="none"></circle>
            </svg>
          </div>
          <span className="ui-loading__text fs28">加载中...</span>
        </div>
      )}
    </div>
  )
})

export default PageLoading
