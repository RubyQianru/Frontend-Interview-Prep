/**
 * 模块化开发
 * 
 * - export 导出
 * 一个模块就是一个独立的文件，内部变量外部无法获取，export
 * 
 * - import
 * 加载模块
 * 
 * - export default 命令
 * 为模块指定默认导出
 * 只能够使用一次
 */

// Export
// 1.
export var name = "Ruby"

// 2. 
var name2 = "Beebee"
export { name2 }

// 3.
function fn1() {}
function fn2() {}

export { fn1 as checkName, fn2 as checkAge }

// Import