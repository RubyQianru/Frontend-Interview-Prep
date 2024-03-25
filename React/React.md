# React 18 更新

1. setState 自动批处理
    v17 只有react事件进行批处理
    v18 将所有事件进行批处理，多次调用setstate会被合并成一次，提高了性能

2. 引入了新的root api
    支持 new concurrent renderer

‘’‘js
// react 17

import React from 'react'
import ReactCom from 'react-dom'
import App from './App'

const root = document.getElementById('root')
ReactDom.render(<App/>, root)

// 卸载组件

ReactDom.unmountComponentAtNode(root)

// react 18

import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'

const root = document.getElementById('root')
ReactDom.createRoot(root).render(<App/>)

// 卸载组件

root.unmount()

’‘’

3. 去掉了对ie浏览器的支持

4. flushSync

5. react 组件返回值更新
    react17 return null undefined报错
    react18 支持null undifined返回

6. strict mode更新

7. hook：useInsertionEffect
    执行时机：dom生成后，useLayoutEffect之前

8. concurrent mode
    并发模式，不是功能，而是底层设计
    以前是同步不可中断模式，现在concurrent mode是异步可中断的更新。

# react 设计思想

1. 组件化
    开闭原则
封闭：指组件内部状态自身维护，只处理内部的渲染逻辑
开放：组件通信，不同组件可以通过props单向数据流进行交互

2. 数据驱动视图
UI = fn(data)

不能直接操作dom，而是修改数据state，props数据驱动视图更新

3. vdom
dom操作消耗性能
new vdom和old vdom使用diff算法比较
增量更新

# JSX

jsx是react语法糖，通过babel或者webpack编译转化为js执行

是React.createElement语法糖

# 为什么自定义组件首字母大写

React.createElement 接收三个参数：
- type 元素类型
- props 元素属性
- children 子元素

jsx -》vdom -》dom

如果不大写，dom会当作是hmtl自身的组件

# React组件为什么不回返回为多个元素

为什么只有一个根元素？

1. render函数返回值是一个
2. vdom树的根节点只有一个

react组件如何返回多个组件呢？

1. hoc高阶函数
2. React.fragment

‘’‘js
return (<React.Fragment>
<tr>
<td></td>
</tr>
</React.Fragment>)
’‘’

3. 使用数组返回

# 元素和组件区别

react 类组件
react元素是由jsx创建

# react生命周期

生命周期：组件从创建到销毁的流程

1. 挂载

constructor初始化阶段

static getDerivedStateFromProps

render 创建vdom阶段

componentDidMount 挂载生成真实dom

2. 更新

state props发生变化

static getDerivedStateFromProps

shouldComponentUpdate 返回bool，性能优化

render 更新vdom

getSnapshotBeforeUpdate 获取更新前状态

componentDidUpdate 完成更新后调用

3. 卸载

componengWillUnmount 组件被移除时调用，清楚事件监听，定时器

# React 事件机制

什么是合成事件？

- 事件触发，事件冒泡，事件捕获，事件合成，派发。

作用：

- 底层磨平不同浏览器之间的差异，提供统一稳定与原生事件相同的接口
- 把握主动权，中心化控制
- 引入事件池，避免频繁创建销毁

与原生dom区别：
e.nativeEvent

# dom事件流如何工作？

1. 事件捕获
2. 处于对应目标
3. 事件冒泡

React17 事件之后都把事件绑定在container上

1. 事件绑定在container上
2. react自身实现了冒泡机制，不能通过return false阻止冒泡
3. react通过sytheticEvent完成事件合成

# react常用组件

1. Portal

让子组件渲染在出了父组件之外的dom节点方式

‘’‘js
ReactDom.createPortal(child, container)
’‘’

- 提示框，弹窗

2. Fragment

包裹子列表，不产生额外dom节点

3. Context

跨层级组件数据传递

# React Router 工作原理

为什么需要前端路由？

- 早期每次页面都要跳转，用户体验差
- spa单页应用 seo不友好
- 需要记住用户操作

解决了什么问题？

- 刷新页面，根据url对资源进行重定向
- 不同url映射到不同内容
- 拦截用户的刷新操作：感知url的变化

### react-router-dom 组件

- HashRouter / BrowserRouter 路由器
- Route 路由匹配
- Link 链接
- NavLink 当前活动的链接
- Switch 路由跳转
- Redirect 路由重定向

- 核心能力：跳转
- 路由：定义路由和组件的映射关系
- 导航：出发路由改变

- BrowserRouter html5 history api 实现路由跳转。使用popState
- HashRouter url的hash属性。使用hashChange

# 数据流动

React 组件通信：

- 父 -》子：props
- 子 -》父：回调函数，事件冒泡
- 兄弟：通过父组件中转
- 父 -》后代：context
- 无关组件通信：redux

# react hooks

类组件函数组件的区别：

- 类组件需要声明constructor，函数组件不需要。
- 类组件需要手动绑定this 函数不需要
- 类组件有生命周期钩子，函数没有
- 类组件维护自己state，函数无状态
- 类组件需要集成，函数不需要

解决了什么问题？

- 告别难以理解的class组件
- 解决业务逻辑难以拆分
- 使用状态逻辑复用，变得更简单
- 设计理念更适合react

钩子函数

- useEffect
- useMemos 缓存对应的值
- useState
- useEffectLayout
- useCallback 缓存函数

setState 使用队列机制，将需要更新的state合并后，放入队列中，更高效更新state。如果直接修改this.state，就不会被放入队列中，容易出现未知错误

# React Fiber

Fiber出现背景：

- 老react stack reconciler同步递归过程，不可中断。响应度比较差。没有区别优先级

### Fiber 是什么

fiber是一个js对象

### 更新机制
1. 初始化
- 初始化：fiberRoot
2. beginWork
- wip内存中构建wip fiber。第一次更新后
- current：视图层渲染的书current fiber树
3. 深度调和子节点 渲染视图
alernate树，完成整个子节点遍历，包括fiber创建，wip树作为最新树，完成初始化流程

# React 渲染流程

jsx描绘洁面
jsx使用babel转换为vdom
vdom fiber 在进行渲染
vdom转换fiber reconcile
转换过程中创建dom
commit到dom