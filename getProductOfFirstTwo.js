function getProductOfFirstTwo(myArray) {
    let firstElement = myArray[0];
    let secondElement = myArray[1];
    return firstElement * secondElement;
}

myArray = [1, 2, 3, 4, 5]
let output1 = getProductOfFirstTwo(myArray);
let output2 = getProductOfFirstTwo([2, 4, 5, 10])
let output3 = getProductOfFirstTwo([1, 0, -2, -1])


let newArray = [output1, output2, output3]
console.log(newArray)
console.log(getProductOfFirstTwo(newArray));

