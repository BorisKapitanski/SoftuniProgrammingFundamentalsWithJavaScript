function printAndSum(n, m) {
    let sum = 0;

    let printLine = '';
    for (let i = n; i <= m; i++) {

        sum += i;
        printLine += i + ' ';

    }
    console.log(printLine);
    console.log('Sum: ' + sum);
}
printAndSum(5, 10);