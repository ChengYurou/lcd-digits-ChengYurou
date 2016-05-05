function printLcdDigits(input) {
    var newArray = convertNumArray(input);
    var needPrintNumbers = buildPrintNumbers(newArray);
    var lcdDigits = buildText(needPrintNumbers);

    console.log(lcdDigits);
}

function convertNumArray(input) {

    return input.split("");
}

function buildPrintNumbers(numArray) {
    var digits = getDigits();
    var needPrintNumbers = [];

    numArray.forEach(function (num) {
        var existedDigit = findExistedDigit(num, digits);
        needPrintNumbers.push(existedDigit);
    });

    return needPrintNumbers;
}

function findExistedDigit(num, digits) {
    var existedDigit;

    digits.forEach(function (digit) {
        if (digit.name === num) {
            existedDigit = digit;
        }
    });

    return existedDigit;
}

function buildText(numbers) {
    var strings = [];
    var text = '\n';

    for (var k = 0; k < numbers.length; k++) {
        var string = '';

        for (var i = 0; i < numbers[k].lcd.length; i++) {
            string += (numbers[i].lcd[k] + ' ');

            if (i > 1) {
                string += '\n';
            }
        }
        strings.push(string);

    }

    strings.forEach(function (stringItem) {
        text += stringItem;
    });

    return text;
}


