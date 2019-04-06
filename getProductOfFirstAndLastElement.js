function getProductOfFirstAndLastElement(array) {
  firstIndex = 0;// identify first index
  firstElement = array[firstIndex]; // identify first element

  arrayLength = array.length; // identify length
  lastIndex = arrayLength - 1; // identify last index
  lastElement = array[lastIndex]; // identify last element

  product = firstElement * lastElement;// get product of first element and last element
  return product;
}


array1 = [3,7,3];
x = getProductOfFirstAndLastElement(array1);
console.log(x);
