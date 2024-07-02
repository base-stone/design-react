import type { FC } from 'react'
import { memo } from 'react'

interface Props {
  image?: string
  title?: string
}

const Empty: FC<Props> = memo((props) => {
  const { image, title = '暂无数据' } = props
  return (
    <div className="ui-empty flex-column flex-v-center flex-h-center">
      <div
        className="ui-empty-pic"
        style={{ backgroundImage: image ? `url(${image})` : 'none' }}
      ></div>
      <span className="lh44">{title}</span>
    </div>
  )
})

export default Empty
