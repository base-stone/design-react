import { FC, memo } from 'react'

interface Props {
  image?: string
  title?: string
}

const Empty: FC<Props> = memo((props) => {
  const { image, title = '暂无数据' } = props
  return (
    <div className="ui-empty flex-column flex-v-center flex-h-center">
      {image ? (
        <div className="ui-empty-pic" style={{ backgroundImage: `url(${image})` }}></div>
      ) : (
        <div className="ui-empty-pic"></div>
      )}
      <span className="lh44">{title}</span>
    </div>
  )
})

export default Empty
