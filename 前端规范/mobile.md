# 移动web开发规范

## 基本原则

* 控制静态文件大小（js、css、html压缩，img控制大小）
* 减少http请求数（js、css合并，img用css sprite或者data url）
* 缓存的使用（manifest和localstorage甚至web DB）
* 能用css实现的，尽量少用图片
* 首屏优先，其它异步懒加载
