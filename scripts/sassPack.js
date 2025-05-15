import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import * as sass from 'sass'
import postcss from 'postcss'
import pxtorem from 'postcss-pxtorem'
import packageJson from '../package.json' with { type: 'json' }

const comment =
  '/*!\n' +
  ` * design-react.css  v${packageJson.version} \n` +
  ` * Copyright(c) 2013-${new Date().getFullYear()} \n` +
  ' * Released under the MIT License.\n' +
  ' */\n'


// 手动创建 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compressed = sass.compile('./src/style/index.scss', {
  style: 'compressed', // 压缩输出
  includePaths: [path.resolve(__dirname, 'node_modules')]
})

const options = {
  rootValue: 100,
  unitPrecision: 5,
  propList: ['*'],
  replace: true,
  mediaQuery: false,
  minPixelValue: 0
}
const processedCss = postcss(pxtorem(options)).process(compressed.css).css

fs.writeFile(`./dist/design-react.css`, comment + processedCss, 'utf-8', () => {
  try {
    console.log('scss打包成功')
  } catch (e) {
    console.log('写入内容失败', e)
  }
})
