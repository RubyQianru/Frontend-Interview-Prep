/**
 * promise有几种状态？
 * - pending
 * - fulfilled
 * - reject
 * 
 * 状态不可逆
 * - pending -> fulfilled
 * - pending -> rejecy 异常 catch
 * 
 * 
 */

const promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    console.log(2)
})

promise.then(()=>{
    console.log(3)
})

console.log(4)

// promise 中值的穿透是什么？

/**
 * .then, .catch 的期望是函数，如果传入非函数则会发生值穿透
 * 如果传入非函数，then返回promise的data会返回上一个promise的data，并返回resolve
 */

Promise.resolve(1)
.then(2)
.then(Promise.resolve(3))
.then(console.log)