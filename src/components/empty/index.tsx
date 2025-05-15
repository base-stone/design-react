import type { FC } from 'react'
import { memo } from 'react'

interface Props {
  image?: string
  description?: string
}

const Empty: FC<Props> = memo((props) => {
  const { image, description = '暂无数据' } = props
  return (
    <div className="ui-empty flex-column flex-v-center flex-h-center">
      <div
        className="ui-empty-pic"
        style={{ backgroundImage: image ? `url(${image})` : 'none' }}
      ></div>
      <span className="lh44">{description}</span>
    </div>
  )
})

export default Empty
