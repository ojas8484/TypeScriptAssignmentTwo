function maximum(numberList : number []) {
    var largestElement :number = 0;
    var currentElement : number = 0;
    var secondLargestElement :number = 0;
    for (var i = 0; i < numberList.length; i++) {
        currentElement = numberList[i];
        if (currentElement > largestElement){
            secondLargestElement = largestElement;
            largestElement = currentElement;
        }
        else if(currentElement > secondLargestElement){
            secondLargestElement = currentElement;
        }       
    }
    return secondLargestElement;
}
var numberBox : number []= [23,89,6,29,56,45,77,32]
console.log(maximum(numberBox));