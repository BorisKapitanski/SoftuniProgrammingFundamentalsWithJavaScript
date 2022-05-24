function distanceBetweenPoints(x1, y1, x2, y2) {
    let xy1 = x2 - x1;
    let xy2 = y2 - y1;
    let squere1 = xy1 * xy1;
    let squere2 = xy2 * xy2;
    let sum = squere1 + squere2;
    let result = Math.sqrt(sum);
    console.log(result);


}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);