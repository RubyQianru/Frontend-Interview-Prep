/**
 * 浅拷贝和浅拷贝有什么区别？
 * 
 * 数据类型
 * - 基本类型：栈内存中
 * - 引用类型：堆内存中，变量，指向堆内存中实际对象的引用
 * 
 * 浅拷贝
 * - 只拷贝一层
 * - 引用类型拷贝内存地址
 * 
 * Object.assign
 * Array.prototype.slice()
 * Array.prototype.concat()
 * 扩展运算符
 * 
 * 深拷贝
 * - 开辟一个新的栈，两个对象属性完全相同，但是对应两个不同的地址，修改一个对象的属性不会改变另一个对象的属性
 * 
 * _.cloneDeep()  loadsh深拷贝函数
 * jQuery.extend()
 * JSON.stringify() 存在弊端，会忽略undefined，symbol，函数
 * 手写循环递归
 * 
 */