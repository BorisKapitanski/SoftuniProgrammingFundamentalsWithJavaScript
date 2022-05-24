function sumOfOddNumbers(n) {
    let sum = 0;
    let counter = 0;
    for (let i = 0; i <= n * 2; i++) {
        if (i % 2 != 0) {
            console.log(i);
            sum += i;
            counter++
        }
    }
    if (counter == n) {
        console.log('Sum: ' + sum);
    }

}



sumOfOddNumbers(5);