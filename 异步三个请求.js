/**
 * 1. Promise.all
 * 
 * 2. 如下
 * 
 */

let arr = [];
function fn(data) {
    arr.push(data)
    if (arr.length == 2) {
        console.log(arr)
    }
}