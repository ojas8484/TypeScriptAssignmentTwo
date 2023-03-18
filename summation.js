function summation(numberList) {
    var total = 0;
    var i = 0;
    for (i = 0; i < numberList.length; i++) {
        total = total + numberList[i];
    }
    return total;
}
var numberArray = [23, 6, 7, 4, 5, 7];
var answer = 0;
answer = summation(numberArray);
console.log(answer);
