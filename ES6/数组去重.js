/*
The indexOf() method of Array instances returns the first index at which a given element 
can be found in the array, or -1 if it is not present.

The filter() method of Array instances creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test implemented by the provided function.
*/

let arr = [223, 223, 233, 233, null, null, NaN, NaN];

Array.prototype.myUnique = function() {
    return this.filter((n, ind) => {
        return this.indexOf(n, 0) === ind
    })

}