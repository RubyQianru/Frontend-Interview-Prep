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


