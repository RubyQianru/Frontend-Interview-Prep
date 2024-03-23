/*
The shift() method of Array instances removes the first element from an array and returns that removed element. 
This method changes the length of the array.

The splice() method of Array instances changes the contents of an array by removing or replacing existing elements 
and/or adding new elements in place.

The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the 
new length of the array.

*/
let arr = [1,2,3];

Array.prototype.myUnshift = function() {
    const len = arguments.length;
    for (let i = len - 1; i >= 0; i --) {
        const element = arguments[i];
        this.splice(0, 0, element);
    }

    return this.length;
 }

console.log(arr.myUnshift(3,2,1), arr)