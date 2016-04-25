function convertNumArray(input){
    var numArray = input.split("");
    return numArray;
}

function buildPrintNums(numArray){
    var digits = getDigits();
    var needPrintNums = [];
    numArray.forEach(function(num){
       var existedDigit = findExistedDigit(num, digits);
        needPrintNums.push(existedDigit);
    });

    return needPrintNums;
}

function findExistedDigit(num, digits){
    var existedDigit;
    digits.forEach(function(digit){
        if(digit.name === num){
            existedDigit = digit;
        }
    });

    return existedDigit;
}

function printDigits(nums){
    var row1 = '';
    var row2 = '';
    var row3 = '';
    nums.forEach(function(num){
        row1 += num.led[0] + ' ';
        row2 += num.led[1] + ' ';
        row3 += num.led[2] + ' ';
    });
    console.log('\n'+row1+'\n'+row2+'\n'+row3+'\n');
}