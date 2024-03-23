/*
The Object.fromEntries() static method transforms a 
list of key-value pairs into an object.


The URLSearchParams interface defines utility methods to 
work with the query string of a URL.


*/

let url = 'https://alibaba.com?a=1&b=2&c=3#hash'

function queryURLParams(URL) {
    let url = URL.split('?')[1];
    const urlSearchParams = new URLSearchParams(url)
    const params = Object.fromEntries(urlSearchParams)
    return params
}