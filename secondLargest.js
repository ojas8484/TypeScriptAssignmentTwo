function maxNumber(numberList) {
    var largestElement = 0;
    var currentElement = 0;
    var secondLargestElement = 0;
    for (var i = 0; i < numberList.length; i++) {
        currentElement = numberList[i];
        if (currentElement > largestElement) {
            secondLargestElement = largestElement;
            largestElement = currentElement;
        }
        else if (currentElement > secondLargestElement) {
            secondLargestElement = currentElement;
        }
    }
    return secondLargestElement;
}
var numberBox = [23, 89, 6, 29, 56, 45, 77, 99];
console.log(maxNumber(numberBox));
