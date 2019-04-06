function getLastElementOf(array) {
    lengthOfArray = array.length; // identify length of array
    lastIndex = lengthOfArray - 1;// identify last index of array from length
    lastElement = array[lastIndex]// identify last element of array
    return lastElement;
}

array1 = ["Birds", "Dogs", "Cats"];
array2 = ["Kim", "John", "Smith", "Diary"];
array3 = ["Baket", "Ball", "Jumping", "Jacks", "The"];

val1 = getLastElementOf(array1);
val2 = getLastElementOf(array2);
val3 = getLastElementOf(array3);

array4 = [val1,val2,val3];
val4 = getLastElementOf(array4);

console.log(val4);
