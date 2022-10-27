function invertNumbers(inputArray){
    let invertedArray = [];

    for( let number of inputArray){
        number *= -1;
        invertedArray.push(number);
    }

    return (invertedArray);
}

console.log(invertNumbers([1, -3, 2, 8, -10]));