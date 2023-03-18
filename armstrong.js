function chkArmstrong(a) {
    var num = a;
    var totalDigits = a.toString().length;
    var digits = [];
    var multiply = 0;
    while (a != 0) {
        digits.push(a % 10);
        a = Math.trunc(a / 10);
    }
    digits.reverse();
    for (var i = 0; i < digits.length; i++) {
        multiply += (Math.pow(digits[i], totalDigits));
    }
    if (multiply == num) {
        console.log("It is an Armstrong number");
    }
    else {
        console.log("The given number is not an Armstrong number");
    }
}
var num = 153;
chkArmstrong(num);
