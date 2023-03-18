function maxNumber(numberList) {
    var largestElement = 1;
    var currentElement = 0;
    for (var i = 0; i < numberList.length; i++) {
        currentElement = numberList[i];
        if (currentElement > largestElement) {
            largestElement = currentElement;
        }
    }
    return largestElement;
}
var numberBox = [23, 89, 6, 29, 56, 45, 77, 32];
console.log(maxNumber(numberBox));
