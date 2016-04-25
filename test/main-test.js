describe('lcd-digits', function() {

    var input;

    beforeEach(function() {
        input = '910';
        numArray = ['9','1','0'];
        needPrintNums = [
            {name:"9", led:[["._."],["|_|"],["..|"]]},
            {name:"1", led:[["..."],["..|"],["..|"]]},
            {name:"0", led:[["._."],["|.|"],["|_|"]]}
        ];
    });

    it('should return array contain 3 items', function(){

        var numArray = convertNumArray(input);
        var expectNumArray = ['9','1','0'];
        expect(numArray).toEqual(expectNumArray);
    });

    it('should return collection contain 3 items', function(){

        var needPrintNums = buildPrintNums(numArray);
        var expectNeedPrintNums = [
            {name:"9", led:[["._."],["|_|"],["..|"]]},
            {name:"1", led:[["..."],["..|"],["..|"]]},
            {name:"0", led:[["._."],["|.|"],["|_|"]]}
        ];

        expect(needPrintNums).toEqual(expectNeedPrintNums);
    });

    // it('should print correct text',function(){
    //     spyOn(console,'log');
    //
    //     printDigits(needPrintNums);
    //
    //     var expectText =
    //         '\n._. \n' +
    //         '|_| \n' +
    //         '..| \n';
    //     expect(console.log).toHaveBeenCalledWith(expectText);
    // });

    it('should print correct text',function(){
        spyOn(console,'log');

        printDigits(needPrintNums);

        var expectText =
        '\n._. ... ._. \n' +
        '|_| ..| |.| \n' +
        '..| ..| |_| \n';
        expect(console.log).toHaveBeenCalledWith(expectText);
    });

});