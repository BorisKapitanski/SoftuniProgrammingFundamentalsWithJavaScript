function triangleOfNumbers(n) {
    
    for (let line = 1; line <= n; line++) {
        let printline = '';
        for (let row = 1; row <= line; row++) {
            printline += line + ' ';

        }
        console.log(printline);
    }
}
triangleOfNumbers(5);