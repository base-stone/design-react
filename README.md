# design-react


## 安装

```

  pnpm add @st-fed/design-react

```



## 常规项目代码目录
```
├── components
│   ├── lazy-image
│   │   └── index.tsx
│   ├── loading
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── modal
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── overlay
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── page-loading
│   │   ├── index.scss
│   │   └── index.tsx
│   ├── scroll-list
│   │   └── index.tsx
│   └── toast
│       ├── index.scss
│       └── index.tsx
├── main.ts
├── style
│   ├── animate.scss
│   ├── app.scss
│   ├── color.scss
│   ├── font.scss
│   ├── index.scss
│   ├── layout.scss
│   ├── reset.scss
│   └── ui-method.scss
└── vite-env.d.ts
```

##  Empty使用

```
  import { Empty } from '@st-fed/design-react'
  <Empty
    description='请前往美术主站创建文件夹'
  ></Empty>
```

##  Empty使用

```
  import { Empty } from '@st-fed/design-react'
  <Empty
    description='请前往美术主站创建文件夹'
  ></Empty>
```

##  LazyImage 使用

```
  import { LazyImage } from '@st-fed/design-react'
  <LazyImage
    src='https://artvista-web-test.yutang.work/admin/file/project/open/PT6S72NGYP22ae0a42e0e9ff613d95e64691c8ef44'
  ></LazyImage>
```

##  Loading 使用

```
  import { showLoading, hideLoading } from '@st-fed/design-react'
  
  showLoading()
  hideLoading()
```

##  showModal 使用

```
  import { showModal } from '@st-fed/design-react'
  
  showModal({
    title: `全部取消`,
    content: `确定取消当前所有（包含未成功的）任务吗？`,
    cancelText: '取消',
    confirmText: '确定',
    success: async () => {
      showToast('操作成功')
    }
  })
```

##  Overlay 使用

```
  import { Overlay } from '@st-fed/design-react'
  
   <Overlay visible={visible} onChange={(val) => onDownloadRecordVisible(val)}>
      {!loading && (
        <div className={style['info-container']}>
          <div className={classNames('flex flex-v-center', style['info-title'])}>
            <span className="fs14 c050">查看下载记录</span>
            <Tooltip title={checkedName}>
              <strong className="fs14 text-ellipsis">【{checkedName}】</strong>
            </Tooltip>
            <div className={style['info-close']} onClick={() => onDownloadRecordVisible(false)}>
              <i className={style['icon-close']}></i>
            </div>
          </div>
          <div className={style['info-body']}>
            <div className={style['info-table']}>
              <div className={classNames('flex flex-v-center', style['info-table-head'])}>
                <span className="font-500">下载人</span>
                <span className="font-500 flex-1">下载时间</span>
              </div>
              {list.map((item) => (
                <div key={item.id} className={style['info-table-tr']}>
                  <span>{item.createUser}</span>
                  <span>{item.createDate}</span>
                </div>
              ))}
              {!list.length && (
                <div className="pb10">
                  <Empty></Empty>
                </div>
              )}
            </div>
          </div>
          <div className={classNames('flex flex-v-center flex-h-end', style['info-footer'])}>
            {list.length ? (
              <strong onClick={handleExport}>导出记录</strong>
            ) : (
              <strong className={style['disabled']}>导出记录</strong>
            )}
          </div>
        </div>
      )}
    </Overlay>
```

##  PageLoading 使用

```
  import { PageLoading } from '@st-fed/design-react'


  return (
    <PageLoading show={uploadLoading && downloadLoading} />
  )

```

##  ScrollList 使用

```
  import { ScrollList } from '@st-fed/design-react'
  
  const onLoadList = useCallback(() => {
    if (loading) {
      return false
    }
    onSetLoading(true)
    const timeout = setTimeout(() => {
      clearTimeout(timeout)
      onSetSearchParams((state) => ({ ...state, showMessage: false, pageNo: ++state.pageNo }))
    }, 500)
  }, [loading])

  return (
    <ScrollList loading={loading} finished={finished} onLoad={onLoadList}>
      <FolderList item={item}></FolderList>
    </ScrollList>
  )

```

##  showToast 使用

```
  import { showToast } from '@st-fed/design-react'
  
  showToast('操作成功')
```

