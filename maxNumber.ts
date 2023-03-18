function maximum(numberList : number []) {
    var largestElement :number = 1
    var currentElement : number =0;
    for (var i = 0; i < numberList.length; i++) {
        currentElement = numberList[i];
        if (currentElement > largestElement){
            largestElement = currentElement;
        }       
    }
    return largestElement;
}
var numberBox : number []= [23,89,6,29,56,45,77,32]
console.log(maximum(numberBox));