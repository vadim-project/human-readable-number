module.exports = function toReadable (number) {
    var digit = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var twoDigit = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var threeDigit = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number < 10) {
        return digit[number];
    }
    if (number < 20) {
        return twoDigit[number % 10];
    }
    var secondNumber = Math.floor(number % 100 / 10);
    var thirdNumber = number % 10;
    if (number < 100) {
        if (thirdNumber === 0) {
            return threeDigit[secondNumber - 2];
        }
        return threeDigit[secondNumber - 2] + ' ' + digit[thirdNumber];
    }
    var firstNumber = Math.floor(number / 100);
    if (number < 1000) {
        if (secondNumber === 0 && thirdNumber === 0) {
            return digit[firstNumber] + ' hundred';
        }
        if (secondNumber === 0) {
            return digit[firstNumber] + ' hundred ' + digit[thirdNumber];
        }
        if (secondNumber === 1) {
            return digit[firstNumber] + ' hundred ' + twoDigit[number % 10];
        }
        if (thirdNumber === 0) {
            return digit[firstNumber] + ' hundred ' + threeDigit[secondNumber - 2];
        }
        return digit[firstNumber] + ' hundred ' + threeDigit[secondNumber - 2] + ' ' + digit[thirdNumber];
    }
}
