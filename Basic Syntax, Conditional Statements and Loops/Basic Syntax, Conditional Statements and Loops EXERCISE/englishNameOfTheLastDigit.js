function englishNameOfTheLastDigit(num) {
    let lastDigt = num % 10;
    if (lastDigt > 0) {
        lastDigt = Math.abs(lastDigt);
    }
    let englishName = '';



    switch (lastDigt) {
        case 0: englishName = 'zero'; break;
        case 1: englishName = 'one '; break;
        case 2: englishName = 'two'; break;
        case 3: englishName = 'three'; break;
        case 4: englishName = 'four'; break;
        case 5: englishName = 'five'; break;
        case 6: englishName = 'six'; break;
        case 7: englishName = 'seven'; break;
        case 8: englishName = 'eight'; break;
        case 9: englishName = 'nine'; break;

    }
    console.log(englishName);
}
englishNameOfTheLastDigit(151);