/*

The parseInt() function parses a string argument and returns an integer
 of the specified radix (the base in mathematical numeral systems).

*/

let arr = [1,2,35,6,7,9,9,0,10];

function result(arr) {
    for (let i = 0; i < arr.length; i += 1){
        let randomIndex = parseInt(Math.random() * arr.length);

        let curNum = arr[i];
        arr[i] = arr[randomInex];
        arr[randomIndex] = curNum;
    }

    return arr;
}

arr.sort(() => Math.random() - 0.5)