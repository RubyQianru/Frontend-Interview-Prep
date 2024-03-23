/**
 * The some() method of Array instances tests whether at least one element 
 * in the array passes the test implemented by the provided function. It 
 * returns true if, in the array, it finds an element for which the provided 
 * function returns true; otherwise it returns false. It doesn't modify the 
 * array.
 * 
 * The concat() method of Array instances is used to merge two or more arrays. 
 * This method does not change the existing arrays, but instead returns a new 
 * array.
 */

let arr= [1,2,[3,4,5],6,7,[8,[9]]]

const flatten = function(arr) {
    while (arr.some(v => Array.isArray(v))) {
        arr = [].concat(...arr);
    }

    return arr
}