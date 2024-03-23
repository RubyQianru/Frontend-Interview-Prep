# 什么是虚拟dom，为什么需要虚拟dom

1. 什么是虚拟dom

virtual dom 跨平台能力，rn，weex

js用对象的属性描述节点，并映射到真实环境

表现为object对象，包含标签名tag，属性attr，子节点children

vdom的节点与真实dom属性一一对应

2. 为什么需要虚拟dom

dom操作引起性能问题

vdom 通过vnode diff 算法比较前后差异，并保存到本地js对象当中，最终将这个js对象attach到dom树上，避免大量无谓的计算

抽象的原本渲染的过程，实现跨平台的能力


