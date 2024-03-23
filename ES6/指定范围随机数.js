let num

Math.round(num)
Math.floor(num)
Math.ceil(num)

function fn(min, max) {
    //(min, max)
    return Math.round(Math.random() * (max - min - 2) + min + 1 )
    //[min, max]
    return Math.round(Math.random() * (max - min) + min)
}