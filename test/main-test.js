describe('lcd-digits', function () {
    var input;

    beforeEach(function () {
        input = '910';
    });

    it('should print correct text', function () {
        spyOn(console, 'log');

        printLcdDigits(input);

        var expectText =
            '\n._. ... ._. \n' +
            '|_| ..| |.| \n' +
            '..| ..| |_| \n';
        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('lcd-unit1', function () {
    var input;

    beforeEach(function () {
        input = '910';
    });

    it('should return array contain 3 items', function () {
        var numArray = convertNumArray(input);
        var expectNumArray = ['9', '1', '0'];

        expect(numArray).toEqual(expectNumArray);
    });
});

describe('lcd-unit2', function () {
    var numArray;

    beforeEach(function () {
        numArray = ['9', '1', '0'];
    });

    it('should return collection contain 3 items', function () {

        var needPrintNumbers = buildPrintNumbers(numArray);
        var expectNeedPrintNumbers = [
            {name: "9", lcd: ["._.", "|_|", "..|"]},
            {name: "1", lcd: ["...", "..|", "..|"]},
            {name: "0", lcd: ["._.", "|.|", "|_|"]}
        ];

        expect(needPrintNumbers).toEqual(expectNeedPrintNumbers);
    });
});

describe('lcd-unit3', function () {
    var needPrintNumbers;

    beforeEach(function () {
        needPrintNumbers = [
            {name: "9", lcd: ["._.", "|_|", "..|"]},
            {name: "1", lcd: ["...", "..|", "..|"]},
            {name: "0", lcd: ["._.", "|.|", "|_|"]}
        ];
    });

    it('should return correct text', function () {
        var text = buildText(needPrintNumbers);

        var expectText =
            '\n._. ... ._. \n' +
            '|_| ..| |.| \n' +
            '..| ..| |_| \n';
        expect(text).toEqual(expectText);
    });
});
