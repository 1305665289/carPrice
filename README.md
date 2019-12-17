# 汽车信息大全

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目开发流程

- 初始化项目
- 规定工程目结构规范
- 拆分store
- 引入commom.cset.css/ress消除浏览器默认样式
- 引入Vant，移动端UI库
- 规定数据流向
- 二次封装axios，添加拦截器逻辑
- Rem自适应

- 首页逻辑
  - 图片懒加载
  - 事件委托
  - touch事件
  - 消除滚动的相互影响
  - 点击右侧，实现楼层效果
  - 引入Vant ,移动端的UI库

- 详情页
  - 从右侧进入页面
  - 跳转页面 (每次跳转都需要传递ID)

- 图片页
  - 图片懒加载
  - 图片轮播图

- 项目优化
  1.百分百还原页面
  2.百分百还原效果
  3.优化交互动画
  4.移动端兼容问题
    4.1  1px像素问题
    4.2  ios滑动卡顿
    4.3  键盘抬起，input框遮挡问题
    4.4  默认样式
    4.5  300ms延迟，点击穿透
    4.6  rem适配问题
  5.git仓库，工程目录结构
  6.代码整理(缩进，空行，命名规范)
  7.REANME整理

-首屏
  1.骨架屏 (dom节点，图片，vant)
  2.图片懒加载(预加载的图片 换成1*1)
  3.touch事件(使用防抖或者节流)
  4.优化动画
  5.请求优化

- 发布上线
  - 区分vue的dist
  - 服务端开启gzip
  - 去掉sourceMapp
  - 修改publicPath(1.相对路径 2.子路径)
  - 使用XFTP把构建后的文件上传到服务器上
  - 拼接线上路径
  - 配置Https,优化资源加载协议(把资源头部去掉，自适应当前页面的协议)
  - 路由懒加载
  - UI库的按需加载
  - Vuex去掉Logger
  - 第三方依赖的抽离，发布到CDN
  - 优化资源加载，移动端300k以内

  ## 未完成
  - UI库的按需加载
  - 百分之八十还原页面
  - 百分之七十还原效果
  - 命名不规范