function chkArmstrong(a: number): void {
  var num: number = a;
  var totalDigits: number = a.toString().length;
  var digits: number[] = [];
  var multiply: number = 0;
  while (a != 0) {
    digits.push(a % 10);
    a = Math.trunc(a / 10);
  }
  digits.reverse();
  for (var i = 0; i < digits.length; i++) {
    multiply += digits[i] ** totalDigits;
  }
  if (multiply == num) {
    console.log("It is an Armstrong number");
  } else {
    console.log("The given number is not an Armstrong number");
  }
}
var num: number = 153;
chkArmstrong(num);
