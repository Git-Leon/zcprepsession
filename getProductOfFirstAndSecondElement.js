function getProductOfFirstAndSecondElement(array) {
  firstIndex = 0;// identify first index
  firstElement = array[firstIndex]; // identify first element

  secondElement = 1; // identify last index
  secondElement = array[secondElement]; // identify last element

  product = firstElement * secondElement;// get product of first element and last element
  return product;
}


array1 = [3,7,3];
x = getProductOfFirstAndLastElement(array1);
console.log(x);
