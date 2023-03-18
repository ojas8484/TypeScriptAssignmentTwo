function summation(numberList: number[]) {
  var total: number = 0;
  var i: number = 0;
  for (i = 0; i < numberList.length; i++) {
    total = total + numberList[i];
  }
  return total;
}
var numberArray: number[] = [23, 6, 7, 4, 5, 7];
var answer: number = 0;
answer = summation(numberArray);
console.log(answer);
