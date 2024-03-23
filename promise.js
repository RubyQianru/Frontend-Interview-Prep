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